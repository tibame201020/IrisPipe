import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer, Subscription } from 'rxjs';
import { JobState, PipelineState } from '../models/pipeline.model';

@Injectable({
  providedIn: 'root'
})
export class PipelineService {
  private pipelineState: PipelineState = {
    id: 'pipe-xyz-789',
    name: 'Customer Data Sync (Daily)',
    status: 'RUNNING',
    globalThroughput: 0,
    totalProcessedRows: 0,
    jobs: [
      {
        id: 'job-1',
        name: 'Extract MongoDB Customers',
        status: 'RUNNING',
        type: 'SOURCE',
        atomicLevel: 'CHUNK',
        processedRows: 0,
        totalRows: 1000000,
        commitCount: 0,
        throughput: 0
      },
      {
        id: 'job-2',
        name: 'Transform Personal Data',
        status: 'RUNNING',
        type: 'TRANSFORM',
        atomicLevel: 'CHUNK',
        processedRows: 0,
        totalRows: 1000000,
        commitCount: 0,
        throughput: 0,
        lastSnapshotSql: `SELECT id, name, email FROM customers WHERE status = 'ACTIVE'`,
        currentSnapshotSql: `SELECT id, name, email, phone FROM customers WHERE status = 'ACTIVE' AND created_at > '2023-01-01'`
      },
      {
        id: 'job-3',
        name: 'Load Snowflake DWH',
        status: 'PENDING',
        type: 'DESTINATION',
        atomicLevel: 'JOB',
        processedRows: 0,
        totalRows: 1000000,
        commitCount: 0,
        throughput: 0
      }
    ]
  };

  private stateSubject = new BehaviorSubject<PipelineState>(this.pipelineState);
  public state$ = this.stateSubject.asObservable();

  private simSub: Subscription | null = null;
  private tickRate = 100; // ms
  private rowsPerTick = 850; // Roughly 8500 rows/sec
  private hasFailedOnce = false;

  constructor() {
    this.startSimulation();
  }

  private startSimulation() {
    this.simSub = timer(0, this.tickRate).subscribe(() => {
      if (this.pipelineState.status === 'RUNNING') {
        this.simulateTick();
      }
    });
  }

  private simulateTick() {
    let globalThroughput = 0;

    // Simulate failure at around 150k rows
    if (!this.hasFailedOnce && this.pipelineState.jobs[1].processedRows > 150000 && this.pipelineState.jobs[1].status === 'RUNNING') {
      this.hasFailedOnce = true;
      this.triggerFailure();
      return;
    }

    const nextJobs = this.pipelineState.jobs.map((job, index) => {
      if (job.status === 'RUNNING') {
        // Source runs fastest
        const speedMultiplier = index === 0 ? 1.2 : 1.0;
        const addedRows = Math.floor(this.rowsPerTick * speedMultiplier * (0.8 + Math.random() * 0.4));
        const newProcessed = job.processedRows + addedRows;

        // Chunk commit every 10k rows
        const newCommitCount = Math.floor(newProcessed / 10000);

        const throughput = addedRows * (1000 / this.tickRate);
        globalThroughput += throughput;

        if (newProcessed >= (job.totalRows || 0)) {
           return { ...job, processedRows: job.totalRows || 0, throughput: 0, status: 'COMPLETED' as const };
        }

        // Start next job if this one has processed some chunks
        if (index < this.pipelineState.jobs.length - 1 && newCommitCount > 0 && this.pipelineState.jobs[index+1].status === 'PENDING') {
             this.pipelineState.jobs[index+1].status = 'RUNNING';
        }

        return {
          ...job,
          processedRows: newProcessed,
          commitCount: newCommitCount,
          throughput
        };
      }
      return job;
    });

    this.pipelineState = {
      ...this.pipelineState,
      jobs: nextJobs,
      globalThroughput: Math.floor(globalThroughput / nextJobs.filter(j => j.status === 'RUNNING').length || 0),
      totalProcessedRows: nextJobs[0].processedRows // Use source as total
    };

    this.stateSubject.next(this.pipelineState);
  }

  private triggerFailure() {
    const failedJobIndex = 1;
    const failedJob = this.pipelineState.jobs[failedJobIndex];

    const nextJobs = [...this.pipelineState.jobs];
    nextJobs[failedJobIndex] = {
      ...failedJob,
      status: 'FAILED',
      failedChunkIndex: failedJob.commitCount + 1,
      errorMsg: `ConstraintViolationException: Duplicate entry for key 'email_idx' in chunk #${failedJob.commitCount + 1}`,
      throughput: 0
    };

    nextJobs[0].status = 'PAUSED'; // Pause upstream
    nextJobs[2].status = 'PAUSED'; // Pause downstream

    this.pipelineState = {
      ...this.pipelineState,
      status: 'FAILED',
      jobs: nextJobs,
      globalThroughput: 0
    };

    this.stateSubject.next(this.pipelineState);
  }

  public resumePipeline() {
    if (this.pipelineState.status === 'FAILED') {
      const nextJobs = this.pipelineState.jobs.map(job => {
        if (job.status === 'FAILED' || job.status === 'PAUSED') {
          return {
            ...job,
            status: 'RUNNING' as const,
            failedChunkIndex: undefined,
            errorMsg: undefined
          };
        }
        return job;
      });

      this.pipelineState = {
        ...this.pipelineState,
        status: 'RUNNING',
        jobs: nextJobs
      };

      this.stateSubject.next(this.pipelineState);
    }
  }

  ngOnDestroy() {
    if (this.simSub) {
      this.simSub.unsubscribe();
    }
  }
}
