import { Injectable, NgZone, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { PipelineRunDetailInfo, PipelineRunSummaryInfo } from '../../shared/models/sync-pipeline.model';

export interface PipelineRunMutationEvent {
  kind: 'execute' | 'stop' | 'resume' | 'rerun' | 'delete' | 'sync';
  runId: number;
  pipelineId: number;
}

@Injectable({
  providedIn: 'root',
})
export class PipelineRunEventsService {
  private readonly ngZone = inject(NgZone);
  readonly events$ = new Subject<PipelineRunMutationEvent>();

  emitFromSummary(kind: PipelineRunMutationEvent['kind'], summary: PipelineRunSummaryInfo) {
    this.emit({
      kind,
      runId: summary.id,
      pipelineId: summary.pipelineId,
    });
  }

  emitDelete(detail: PipelineRunDetailInfo) {
    this.emit({
      kind: 'delete',
      runId: detail.id,
      pipelineId: detail.pipelineId,
    });
  }

  emitSync(detail: PipelineRunDetailInfo) {
    this.emit({
      kind: 'sync',
      runId: detail.id,
      pipelineId: detail.pipelineId,
    });
  }

  private emit(event: PipelineRunMutationEvent) {
    this.ngZone.run(() => {
      this.events$.next(event);
    });
  }
}
