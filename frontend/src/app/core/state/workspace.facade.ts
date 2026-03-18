import { computed, Injectable, signal } from '@angular/core';
import { appEnvironment } from '../config/app-environment';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceFacade {
  readonly workspaceKey = signal(appEnvironment.defaultWorkspaceKey);
  readonly workspaceName = signal('Default Workspace');
  readonly workspaceLabel = computed(() => `${this.workspaceName()} (${this.workspaceKey()})`);
}
