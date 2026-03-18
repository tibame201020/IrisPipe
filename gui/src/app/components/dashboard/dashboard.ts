import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelineService } from '../../services/pipeline.service';
import { PipelineState } from '../../models/pipeline.model';
import { LiveFirepowerComponent } from '../live-firepower/live-firepower';
import { PipelineTopologyComponent } from '../pipeline-topology/pipeline-topology';
import { BreakpointHudComponent } from '../breakpoint-hud/breakpoint-hud';
import { SnapshotInspectorComponent } from '../snapshot-inspector/snapshot-inspector';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    LiveFirepowerComponent,
    PipelineTopologyComponent,
    BreakpointHudComponent,
    SnapshotInspectorComponent
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent implements OnInit {
  pipeline: PipelineState | null = null;

  constructor(private pipelineService: PipelineService) {}

  ngOnInit() {
    this.pipelineService.state$.subscribe(state => {
      this.pipeline = state;
    });
  }

  onResumePipeline() {
    this.pipelineService.resumePipeline();
  }
}
