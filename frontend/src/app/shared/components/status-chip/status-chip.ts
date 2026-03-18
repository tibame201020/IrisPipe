import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-status-chip',
  imports: [],
  templateUrl: './status-chip.html',
  styleUrl: './status-chip.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusChip {
  readonly status = input<string>('IDLE');
  protected readonly className = computed(() => {
    const value = this.status().toUpperCase();
    if (value === 'STARTED' || value === 'STARTING') {
      return 'chip chip--accent';
    }
    if (value === 'STOPPED' || value === 'STOPPING' || value === 'ABANDONED') {
      return 'chip chip--warning';
    }
    if (value === 'COMPLETED') {
      return 'chip chip--success';
    }
    if (value === 'FAILED') {
      return 'chip chip--danger';
    }
    return 'chip chip--neutral';
  });
}
