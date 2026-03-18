import { computed, Injectable, inject, signal } from '@angular/core';
import { appEnvironment } from '../config/app-environment';
import { WorkspaceApiService } from '../api/workspace-api.service';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceFacade {
  private readonly workspaceApi = inject(WorkspaceApiService);

  readonly workspaceId = signal<number | null>(null);
  readonly workspaceKey = signal<string>(appEnvironment.defaultWorkspaceKey);
  readonly workspaceName = signal('Default Workspace');
  readonly systemDefault = signal(true);
  readonly isLoading = signal(false);
  readonly loadError = signal<string | null>(null);
  readonly workspaceLabel = computed(() => `${this.workspaceName()} (${this.workspaceKey()})`);

  loadCurrentWorkspace(workspaceKey: string = appEnvironment.defaultWorkspaceKey) {
    this.isLoading.set(true);
    this.loadError.set(null);

    this.workspaceApi.currentWorkspace(workspaceKey).subscribe({
      next: (workspace) => {
        this.workspaceId.set(workspace.id);
        this.workspaceKey.set(workspace.workspaceKey);
        this.workspaceName.set(workspace.workspaceName);
        this.systemDefault.set(workspace.systemDefault);
      },
      error: () => {
        this.loadError.set('Failed to load current workspace.');
        this.isLoading.set(false);
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }
}
