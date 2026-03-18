import { expect, test } from '@playwright/test';
import { importPipelineConfig } from '../../support/api/backend-api';
import { minimalPipelineYaml } from '../../support/fixtures/minimal-pipeline';
import { uniqueName } from '../../support/fixtures/unique-name';

function normalizeToken(value: string) {
  return value.replace(/[^a-zA-Z0-9_]/g, '_');
}

test.describe('pipeline config editor', () => {
  test('loads real config data, binds selected job and step state, and saves edits', async ({ page, request }) => {
    const pipelineName = uniqueName('pw-config-editor');
    const pipeline = await importPipelineConfig(request, {
      folderId: null,
      pipelineName,
      fileName: `${pipelineName}.yml`,
      fileContent: minimalPipelineYaml(pipelineName),
    });

    const expectedInitialJobName = `${normalizeToken(pipelineName)}_job`;
    const renamedPipelineName = `${pipelineName}-renamed`;
    const renamedJobName = `${expectedInitialJobName}_edited`;
    const renamedStepName = `${normalizeToken(pipelineName)}_insert_edited`;

    await page.goto(`/pipelines/${pipeline.id}/config`);

    await expect(page.getByRole('heading', { name: pipelineName })).toBeVisible();
    await expect(page.getByTestId('pipeline-config-editor-job-outline')).toContainText(expectedInitialJobName);

    await page.getByTestId('pipeline-config-editor-step-row-1').getByRole('button').click();
    await expect(page.getByTestId('pipeline-config-editor-step-name-input')).toHaveValue(`${normalizeToken(pipelineName)}_insert`);

    await page.getByTestId('pipeline-config-editor-name-input').fill(renamedPipelineName);
    await page.getByTestId('pipeline-config-editor-job-name-input').fill(renamedJobName);
    await page.getByTestId('pipeline-config-editor-step-name-input').fill(renamedStepName);
    await page.getByTestId('pipeline-config-editor-save').click();

    await expect(page.getByTestId('pipeline-config-editor-success')).toContainText('Pipeline config saved.');
    await expect(page.getByTestId('app-toast-success')).toContainText('Pipeline config saved.');
    await expect(page.getByRole('heading', { name: renamedPipelineName })).toBeVisible();
    await expect(page.getByTestId('pipeline-config-editor-job-row-0')).toContainText(renamedJobName);

    await page.reload();

    await expect(page.getByRole('heading', { name: renamedPipelineName })).toBeVisible();
    await expect(page.getByTestId('pipeline-config-editor-job-row-0')).toContainText(renamedJobName);
    await page.getByTestId('pipeline-config-editor-step-row-1').getByRole('button').click();
    await expect(page.getByTestId('pipeline-config-editor-step-name-input')).toHaveValue(renamedStepName);
  });

  test('replaces config from import and deletes pipeline with custom confirm dialog', async ({ page, request }) => {
    const pipelineName = uniqueName('pw-config-replace');
    const pipeline = await importPipelineConfig(request, {
      folderId: null,
      pipelineName,
      fileName: `${pipelineName}.yml`,
      fileContent: minimalPipelineYaml(pipelineName),
    });

    const replacementSeed = `${pipelineName}-replacement`;
    const expectedReplacementJobName = `${normalizeToken(replacementSeed)}_job`;

    await page.goto(`/pipelines/${pipeline.id}/config`);

    await page.getByTestId('pipeline-config-editor-import-input').setInputFiles({
      name: `${pipelineName}-replacement.yml`,
      mimeType: 'application/x-yaml',
      buffer: Buffer.from(minimalPipelineYaml(replacementSeed)),
    });

    await expect(page.getByTestId('pipeline-config-editor-success')).toContainText('Pipeline config replaced from import.');
    await expect(page.getByTestId('app-toast-success')).toContainText('Pipeline config replaced from import.');
    await expect(page.getByTestId('pipeline-config-editor-job-row-0')).toContainText(expectedReplacementJobName);

    await page.getByTestId('pipeline-config-editor-delete').click();
    await expect(page.getByTestId('pipeline-config-editor-delete-dialog')).toBeVisible();
    await page.getByTestId('pipeline-config-editor-delete-confirm').click();

    await expect(page).toHaveURL(/\/recent$/);
    await expect(page.getByTestId('sidebar-tree')).not.toContainText(pipelineName);
  });

  test('renders backend validation and conflict messages inline during save', async ({ page, request }) => {
    const originalPipelineName = uniqueName('pw-config-editor-error');
    const conflictingPipelineName = uniqueName('pw-config-editor-conflict');

    const originalPipeline = await importPipelineConfig(request, {
      folderId: null,
      pipelineName: originalPipelineName,
      fileName: `${originalPipelineName}.yml`,
      fileContent: minimalPipelineYaml(originalPipelineName),
    });

    await importPipelineConfig(request, {
      folderId: null,
      pipelineName: conflictingPipelineName,
      fileName: `${conflictingPipelineName}.yml`,
      fileContent: minimalPipelineYaml(conflictingPipelineName),
    });

    await page.goto(`/pipelines/${originalPipeline.id}/config`);

    await page.getByTestId('pipeline-config-editor-name-input').fill('bad/name');
    await page.getByTestId('pipeline-config-editor-save').click();

    await expect(page.getByTestId('pipeline-config-editor-error')).toContainText('unsupported characters');
    await expect(page.getByTestId('pipeline-config-editor-error-details')).toHaveCount(0);

    await page.getByTestId('pipeline-config-editor-name-input').fill(conflictingPipelineName);
    await page.getByTestId('pipeline-config-editor-save').click();

    await expect(page.getByTestId('pipeline-config-editor-error')).toContainText('already exists');
  });
});
