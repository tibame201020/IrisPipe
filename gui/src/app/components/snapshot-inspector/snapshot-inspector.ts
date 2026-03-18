import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PipelineState } from '../../models/pipeline.model';

@Component({
  selector: 'app-snapshot-inspector',
  imports: [CommonModule, MatCardModule],
  templateUrl: './snapshot-inspector.html',
  styleUrls: ['./snapshot-inspector.scss']
})
export class SnapshotInspectorComponent {
  @Input() pipeline: PipelineState | null = null;
}
