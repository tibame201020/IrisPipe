import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RunDetailFacade {
  readonly selectedRunId = signal<string | null>(null);
  readonly selectedRunStatus = signal<'IDLE' | 'STARTED' | 'COMPLETED'>('IDLE');
  readonly hasSelectedRun = computed(() => this.selectedRunId() !== null);

  selectRun(runId: string | null, status: 'IDLE' | 'STARTED' | 'COMPLETED' = 'STARTED') {
    this.selectedRunId.set(runId);
    this.selectedRunStatus.set(runId ? status : 'IDLE');
  }
}
