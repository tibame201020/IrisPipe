export interface JobState {
  id: string;
  name: string;
  status: 'PENDING' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'PAUSED';
  type: 'SOURCE' | 'TRANSFORM' | 'DESTINATION';
  atomicLevel: 'JOB' | 'CHUNK';
  processedRows: number;
  totalRows?: number;
  commitCount: number;
  failedChunkIndex?: number;
  errorMsg?: string;
  throughput: number; // rows/sec
  lastSnapshotSql?: string;
  currentSnapshotSql?: string;
}

export interface PipelineState {
  id: string;
  name: string;
  status: 'RUNNING' | 'PAUSED' | 'FAILED' | 'COMPLETED';
  globalThroughput: number;
  totalProcessedRows: number;
  jobs: JobState[];
}
