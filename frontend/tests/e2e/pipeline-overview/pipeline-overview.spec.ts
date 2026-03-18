import { expect, test } from '@playwright/test';
import { executePipeline, importPipelineConfig } from '../../support/api/backend-api';
import { minimalPipelineYaml } from '../../support/fixtures/minimal-pipeline';
import { uniqueName } from '../../support/fixtures/unique-name';
import { preparePipelineRuntimeTables, seedPipelineRuntimeSourceRows } from '../../support/fixtures/pipeline-test-data';

test.describe('pipeline overview', () => {
  test('loads real pipeline summary, previews recent runs, and executes pipeline', async ({ page, request }) => {
    await preparePipelineRuntimeTables(request);
    await seedPipelineRuntimeSourceRows(request, [
      { id: 31, name: 'overview-one', updateTime: '2026-03-18 13:00:00' },
      { id: 32, name: 'overview-two', updateTime: '2026-03-18 13:01:00' },
    ]);

    const pipelineName = uniqueName('pw-overview-pipeline');
    const pipeline = await importPipelineConfig(request, {
      folderId: null,
      pipelineName,
      fileName: `${pipelineName}.yml`,
      fileContent: minimalPipelineYaml(pipelineName),
    });

    const firstRun = await executePipeline(request, { pipelineId: pipeline.id });

    await page.goto(`/pipelines/${pipeline.id}`);

    await expect(page.getByRole('heading', { name: pipelineName })).toBeVisible();
    await expect(page.getByTestId('pipeline-overview-recent-runs')).toBeVisible();
    await expect(page.getByTestId(`overview-run-row-${firstRun.id}`)).toBeVisible();

    await page.getByTestId(`overview-run-row-${firstRun.id}`).getByRole('button', { name: 'Inspect' }).click();
    await expect(page).toHaveURL(new RegExp(`/runs/${firstRun.id}$`));

    await page.goto(`/pipelines/${pipeline.id}`);
    await page.getByTestId('pipeline-overview-execute').click();

    await expect(page).toHaveURL(/\/runs\/\d+$/);
    await expect(page.getByTestId('run-inspector')).toContainText(pipelineName);
  });
});
