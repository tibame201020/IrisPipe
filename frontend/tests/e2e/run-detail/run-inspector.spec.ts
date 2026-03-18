import { expect, test } from '@playwright/test';
import { executePipeline, importPipelineConfig } from '../../support/api/backend-api';
import { minimalPipelineYaml } from '../../support/fixtures/minimal-pipeline';
import { uniqueName } from '../../support/fixtures/unique-name';
import { preparePipelineRuntimeTables, seedPipelineRuntimeSourceRows } from '../../support/fixtures/pipeline-test-data';

test.describe('run inspector', () => {
  test('renders real attempt, job, and step data for a selected run', async ({ page, request }) => {
    await preparePipelineRuntimeTables(request);
    await seedPipelineRuntimeSourceRows(request, [
      { id: 21, name: 'detail-one', updateTime: '2026-03-18 12:00:00' },
      { id: 22, name: 'detail-two', updateTime: '2026-03-18 12:01:00' },
    ]);

    const pipelineName = uniqueName('pw-detail-pipeline');
    const pipeline = await importPipelineConfig(request, {
      folderId: null,
      pipelineName,
      fileName: `${pipelineName}.yml`,
      fileContent: minimalPipelineYaml(pipelineName),
    });
    const expectedJobName = `${pipelineName.replace(/[^a-zA-Z0-9_]/g, '_')}_job`;

    const run = await executePipeline(request, { pipelineId: pipeline.id });

    await page.goto(`/runs/${run.id}`);

    await expect(page.getByTestId('run-inspector')).toContainText(`Run #${run.id}`);
    await expect(page.getByTestId('run-inspector')).toContainText(pipelineName);
    await expect(page.getByTestId('run-inspector-attempts')).toContainText('INITIAL');
    await expect(page.getByTestId('run-inspector-jobs')).toContainText(expectedJobName);
    await expect(page.getByTestId('run-inspector-steps')).not.toBeEmpty();
  });

  test('keeps the selected run in the shared inspector across page transitions', async ({ page, request }) => {
    await preparePipelineRuntimeTables(request);
    await seedPipelineRuntimeSourceRows(request, [
      { id: 31, name: 'continuity-one', updateTime: '2026-03-18 13:00:00' },
    ]);

    const pipelineName = uniqueName('pw-continuity-pipeline');
    const pipeline = await importPipelineConfig(request, {
      folderId: null,
      pipelineName,
      fileName: `${pipelineName}.yml`,
      fileContent: minimalPipelineYaml(pipelineName),
    });
    const run = await executePipeline(request, { pipelineId: pipeline.id });

    await page.goto(`/runs/${run.id}`);
    await expect(page.getByTestId('run-inspector')).toContainText(`Run #${run.id}`);

    await page.getByTestId('run-detail-focus-history-link').click();

    await expect(page).toHaveURL(new RegExp(`/pipelines/${pipeline.id}/runs$`));
    await expect(page.getByTestId('run-inspector')).toContainText(`Run #${run.id}`);
    await expect(page.getByTestId('run-inspector')).toContainText(pipelineName);
  });
});
