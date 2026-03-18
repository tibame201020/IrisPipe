import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PipelineState } from '../../models/pipeline.model';

@Component({
  selector: 'app-pipeline-topology',
  imports: [CommonModule, MatCardModule, MatProgressBarModule],
  templateUrl: './pipeline-topology.html',
  styleUrls: ['./pipeline-topology.scss']
})
export class PipelineTopologyComponent {
  @Input() pipeline: PipelineState | null = null;
}
