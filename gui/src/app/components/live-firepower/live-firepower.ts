import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PipelineState } from '../../models/pipeline.model';

@Component({
  selector: 'app-live-firepower',
  imports: [CommonModule, MatCardModule],
  templateUrl: './live-firepower.html',
  styleUrls: ['./live-firepower.scss']
})
export class LiveFirepowerComponent {
  @Input() pipeline: PipelineState | null = null;
}
