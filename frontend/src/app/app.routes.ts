import { Routes } from '@angular/router';
import { AppShell } from './core/layout/app-shell/app-shell';
import { FolderViewPage } from './features/folder-view/folder-view-page/folder-view-page';
import { PipelineOverviewPage } from './features/pipeline-overview/pipeline-overview-page/pipeline-overview-page';
import { PipelineConfigEditorPage } from './features/pipeline-editor/pipeline-config-editor-page/pipeline-config-editor-page';
import { PipelineHistoryPage } from './features/pipeline-history/pipeline-history-page/pipeline-history-page';
import { RecentActivityPage } from './features/recent-runs/recent-activity-page/recent-activity-page';
import { RunDetailFocusPage } from './features/run-detail/run-detail-focus-page/run-detail-focus-page';

export const routes: Routes = [
  {
    path: '',
    component: AppShell,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'recent' },
      { path: 'folders/:folderId', component: FolderViewPage },
      { path: 'pipelines/:pipelineId', component: PipelineOverviewPage },
      { path: 'pipelines/:pipelineId/config', component: PipelineConfigEditorPage },
      { path: 'pipelines/:pipelineId/runs', component: PipelineHistoryPage },
      { path: 'runs/:pipelineRunId', component: RunDetailFocusPage },
      { path: 'recent', component: RecentActivityPage }
    ]
  }
];
