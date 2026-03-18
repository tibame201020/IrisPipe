import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-pipeline-config-editor-page',
  imports: [],
  templateUrl: './pipeline-config-editor-page.html',
  styleUrl: './pipeline-config-editor-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipelineConfigEditorPage {
  protected readonly jobs = [
    { id: 'extract-order', atomicLevel: 'CHUNK', steps: ['extract', 'dedupe'] },
    { id: 'upsert-order', atomicLevel: 'JOB', steps: ['upsert'] },
    { id: 'notify-order', atomicLevel: 'JOB', steps: ['notify'] }
  ];

  protected readonly selectedJobId = signal('extract-order');
}
