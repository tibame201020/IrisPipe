import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RunDetailFacade } from '../../../core/state/run-detail.facade';

@Component({
  selector: 'app-run-detail-focus-page',
  imports: [],
  templateUrl: './run-detail-focus-page.html',
  styleUrl: './run-detail-focus-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RunDetailFocusPage {
  private readonly route = inject(ActivatedRoute);
  private readonly runDetailFacade = inject(RunDetailFacade);

  constructor() {
    this.route.paramMap.subscribe((params) => {
      this.runDetailFacade.selectRun(params.get('pipelineRunId'), 'STARTED');
    });
  }
}
