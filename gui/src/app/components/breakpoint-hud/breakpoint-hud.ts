import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelineState } from '../../models/pipeline.model';

@Component({
  selector: 'app-breakpoint-hud',
  imports: [CommonModule],
  templateUrl: './breakpoint-hud.html',
  styleUrls: ['./breakpoint-hud.scss']
})
export class BreakpointHudComponent {
  @Input() pipeline: PipelineState | null = null;
  @Output() resume = new EventEmitter<void>();

  get failedJob() {
    return this.pipeline?.jobs.find(j => j.status === 'FAILED');
  }

  onResume() {
    this.resume.emit();
  }
}
