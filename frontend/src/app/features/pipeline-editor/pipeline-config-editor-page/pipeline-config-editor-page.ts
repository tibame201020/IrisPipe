import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SyncConfigApiService } from '../../../core/api/sync-config-api.service';
import {
  ConfigPipelineInfo,
  ConfigPipelineUpsertRequest,
  ExecutionStep,
  SyncJobDefinition,
} from '../../../shared/models/sync-config.model';
import { WorkspaceFacade } from '../../../core/state/workspace.facade';
import { TreeFacade } from '../../../core/state/tree.facade';
import { ToastService } from '../../../core/state/toast.service';
import { AppEmptyState } from '../../../shared/components/app-empty-state/app-empty-state';
import { AppSkeleton } from '../../../shared/components/app-skeleton/app-skeleton';
import { AppConfirmDialog } from '../../../shared/components/app-confirm-dialog/app-confirm-dialog';

@Component({
  selector: 'app-pipeline-config-editor-page',
  imports: [FormsModule, RouterLink, RouterLinkActive, AppEmptyState, AppSkeleton, AppConfirmDialog],
  templateUrl: './pipeline-config-editor-page.html',
  styleUrl: './pipeline-config-editor-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipelineConfigEditorPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly syncConfigApi = inject(SyncConfigApiService);
  private readonly workspaceFacade = inject(WorkspaceFacade);
  private readonly treeFacade = inject(TreeFacade);
  private readonly toastService = inject(ToastService);

  protected readonly pipelineId = signal<number | null>(null);
  protected readonly draft = signal<ConfigPipelineInfo | null>(null);
  protected readonly isLoading = signal(false);
  protected readonly loadError = signal<string | null>(null);
  protected readonly isSaving = signal(false);
  protected readonly actionError = signal<string | null>(null);
  protected readonly actionMessage = signal<string | null>(null);
  protected readonly selectedJobIndex = signal(0);
  protected readonly selectedStepIndex = signal(0);
  protected readonly showDeleteConfirm = signal(false);

  protected readonly jobs = computed(() => this.draft()?.jobs ?? []);
  protected readonly canSave = computed(() => {
    return this.draft() !== null && !this.isSaving() && this.validationMessages().length === 0;
  });
  protected readonly selectedJob = computed<SyncJobDefinition | null>(() => {
    const jobs = this.jobs();
    return jobs[this.selectedJobIndex()] ?? null;
  });
  protected readonly selectedStep = computed<ExecutionStep | null>(() => {
    const job = this.selectedJob();
    if (!job) {
      return null;
    }
    return job.executions[this.selectedStepIndex()] ?? null;
  });
  protected readonly validationMessages = computed(() => this.collectValidationMessages(this.draft()));

  private readonly routeSub = this.route.paramMap.subscribe((params) => {
    const rawPipelineId = params.get('pipelineId');
    const pipelineId = rawPipelineId === null ? null : Number(rawPipelineId);
    this.pipelineId.set(Number.isFinite(pipelineId) ? pipelineId : null);
    this.loadPipeline();
  });

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  protected selectJob(index: number) {
    this.selectedJobIndex.set(index);
    this.selectedStepIndex.set(0);
  }

  protected selectStep(index: number) {
    this.selectedStepIndex.set(index);
  }

  protected addJob() {
    this.updateDraft((draft) => {
      draft.jobs.push({
        jobName: `job_${draft.jobs.length + 1}`,
        executions: [
          {
            type: 'EXECUTE',
            name: 'step_1',
            sql: '',
            destTable: null,
            parameters: [],
            watermarkColumn: null,
            summaryInfo: null,
            executionContext: null,
          },
        ],
        setting: {
          fetchSize: 100,
          batchSize: 100,
          deleteThreshold: null,
          atomicLevel: 'JOB',
        },
        database: {
          source: {
            driver: '',
            url: '',
            username: '',
            password: '',
          },
          dest: {
            driver: '',
            url: '',
            username: '',
            password: '',
          },
        },
      });
    });
    this.selectedJobIndex.set(this.jobs().length - 1);
    this.selectedStepIndex.set(0);
  }

  protected addStep() {
    this.updateDraft((draft) => {
      const job = draft.jobs[this.selectedJobIndex()];
      if (!job) {
        return;
      }
      job.executions.push({
        type: 'EXECUTE',
        name: `step_${job.executions.length + 1}`,
        sql: '',
        destTable: null,
        parameters: [],
        watermarkColumn: null,
        summaryInfo: null,
        executionContext: null,
      });
    });
    const job = this.selectedJob();
    this.selectedStepIndex.set(job ? job.executions.length - 1 : 0);
  }

  protected updatePipelineName(value: string) {
    this.updateDraft((draft) => {
      draft.pipelineName = value;
    });
  }

  protected updateSelectedJobName(value: string) {
    this.updateDraft((draft) => {
      const job = draft.jobs[this.selectedJobIndex()];
      if (job) {
        job.jobName = value;
      }
    });
  }

  protected updateSelectedAtomicLevel(value: 'JOB' | 'CHUNK') {
    this.updateDraft((draft) => {
      const job = draft.jobs[this.selectedJobIndex()];
      if (job) {
        job.setting.atomicLevel = value;
      }
    });
  }

  protected updateConnection(
    target: 'source' | 'dest',
    field: 'driver' | 'url' | 'username' | 'password',
    value: string
  ) {
    this.updateDraft((draft) => {
      const job = draft.jobs[this.selectedJobIndex()];
      if (!job) {
        return;
      }

      if (job.database[target] === null) {
        job.database[target] = {
          driver: '',
          url: '',
          username: '',
          password: '',
        };
      }

      job.database[target]![field] = value;
    });
  }

  protected updateSelectedStepField(
    field: 'name' | 'sql' | 'destTable' | 'watermarkColumn',
    value: string
  ) {
    this.updateDraft((draft) => {
      const step = draft.jobs[this.selectedJobIndex()]?.executions[this.selectedStepIndex()];
      if (step) {
        step[field] = value === '' ? null : value;
      }
    });
  }

  protected updateSelectedStepType(value: ExecutionStep['type']) {
    this.updateDraft((draft) => {
      const step = draft.jobs[this.selectedJobIndex()]?.executions[this.selectedStepIndex()];
      if (step) {
        step.type = value;
      }
    });
  }

  protected refresh() {
    this.loadPipeline();
  }

  protected openImportPicker(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  protected save() {
    const pipelineId = this.pipelineId();
    const draft = this.draft();
    if (pipelineId === null || draft === null || this.validationMessages().length > 0) {
      return;
    }

    this.isSaving.set(true);
    this.actionError.set(null);
    this.actionMessage.set(null);

    const request: ConfigPipelineUpsertRequest = {
      folderId: draft.folderId,
      pipelineName: draft.pipelineName,
      jobs: draft.jobs,
    };

    this.syncConfigApi.updatePipeline(pipelineId, request, this.workspaceFacade.workspaceKey()).subscribe({
      next: (pipeline) => {
        this.replaceDraft(pipeline);
        this.treeFacade.loadTree(this.workspaceFacade.workspaceKey());
        this.actionMessage.set('Pipeline config saved.');
        this.toastService.success('Pipeline config saved.');
      },
      error: () => {
        this.actionError.set('Failed to save pipeline config.');
        this.toastService.error('Failed to save pipeline config.');
      },
      complete: () => {
        this.isSaving.set(false);
      }
    });
  }

  protected handleImportFile(event: Event) {
    const pipelineId = this.pipelineId();
    const draft = this.draft();
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;

    if (pipelineId === null || draft === null || file === null) {
      return;
    }

    const lowerName = file.name.toLowerCase();
    const format = lowerName.endsWith('.json') ? 'json' : lowerName.endsWith('.yml') || lowerName.endsWith('.yaml') ? 'yaml' : null;

    this.isSaving.set(true);
    this.actionError.set(null);
    this.actionMessage.set(null);

    this.syncConfigApi.importReplacePipeline(
      pipelineId,
      {
        folderId: draft.folderId,
        pipelineName: draft.pipelineName,
        format,
        file,
      },
      this.workspaceFacade.workspaceKey()
    ).subscribe({
      next: (pipeline) => {
        this.replaceDraft(pipeline);
        this.treeFacade.loadTree(this.workspaceFacade.workspaceKey());
        this.actionMessage.set('Pipeline config replaced from import.');
        this.toastService.success('Pipeline config replaced from import.');
      },
      error: () => {
        this.actionError.set('Failed to import replacement config.');
        this.toastService.error('Failed to import replacement config.');
      },
      complete: () => {
        this.isSaving.set(false);
        input.value = '';
      }
    });
  }

  protected openDeleteConfirm() {
    this.showDeleteConfirm.set(true);
  }

  protected closeDeleteConfirm() {
    this.showDeleteConfirm.set(false);
  }

  protected deletePipeline() {
    const pipelineId = this.pipelineId();
    const draft = this.draft();
    if (pipelineId === null || draft === null) {
      return;
    }

    this.isSaving.set(true);
    this.actionError.set(null);
    this.actionMessage.set(null);

    this.syncConfigApi.deletePipeline(pipelineId, this.workspaceFacade.workspaceKey()).subscribe({
      next: () => {
        this.treeFacade.loadTree(this.workspaceFacade.workspaceKey());
        this.showDeleteConfirm.set(false);
        this.toastService.success('Pipeline deleted.');
        void this.router.navigate(draft.folderId === null ? ['/recent'] : ['/folders', draft.folderId]);
      },
      error: () => {
        this.actionError.set('Failed to delete pipeline.');
        this.toastService.error('Failed to delete pipeline.');
        this.showDeleteConfirm.set(false);
      },
      complete: () => {
        this.isSaving.set(false);
      }
    });
  }

  private loadPipeline() {
    const pipelineId = this.pipelineId();
    if (pipelineId === null) {
      this.draft.set(null);
      this.loadError.set('Missing pipeline id.');
      return;
    }

    this.isLoading.set(true);
    this.loadError.set(null);
    this.actionError.set(null);
    this.actionMessage.set(null);

    this.syncConfigApi.getPipeline(pipelineId, this.workspaceFacade.workspaceKey()).subscribe({
      next: (pipeline) => {
        this.replaceDraft(pipeline);
      },
      error: () => {
        this.draft.set(null);
        this.loadError.set('Failed to load pipeline config.');
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }

  private replaceDraft(pipeline: ConfigPipelineInfo) {
    this.draft.set(structuredClone(pipeline));
    this.selectedJobIndex.set(0);
    this.selectedStepIndex.set(0);
  }

  private updateDraft(mutator: (draft: ConfigPipelineInfo) => void) {
    this.draft.update((draft) => {
      if (draft === null) {
        return draft;
      }

      const next = structuredClone(draft);
      mutator(next);
      return next;
    });
  }

  private collectValidationMessages(draft: ConfigPipelineInfo | null): string[] {
    if (draft === null) {
      return [];
    }

    const messages: string[] = [];

    if (!draft.pipelineName.trim()) {
      messages.push('Pipeline name is required.');
    }

    if (draft.jobs.length === 0) {
      messages.push('At least one job is required.');
    }

    draft.jobs.forEach((job, jobIndex) => {
      if (!job.jobName.trim()) {
        messages.push(`Job ${jobIndex + 1}: job name is required.`);
      }

      if (!job.setting.atomicLevel) {
        messages.push(`Job ${jobIndex + 1}: atomic level is required.`);
      }

      if (job.executions.length === 0) {
        messages.push(`Job ${jobIndex + 1}: at least one step is required.`);
      }

      job.executions.forEach((execution, stepIndex) => {
        if (!execution.type) {
          messages.push(`Job ${jobIndex + 1}, step ${stepIndex + 1}: type is required.`);
        }
        if (!execution.sql?.trim()) {
          messages.push(`Job ${jobIndex + 1}, step ${stepIndex + 1}: sql is required.`);
        }
      });
    });

    return messages;
  }
}
