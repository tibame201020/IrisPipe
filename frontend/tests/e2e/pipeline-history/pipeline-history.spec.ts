import { expect, test } from '@playwright/test';
import { executePipeline, importPipelineConfig } from '../../support/api/backend-api';
import { minimalPipelineYaml } from '../../support/fixtures/minimal-pipeline';
import { uniqueName } from '../../support/fixtures/unique-name';
import { preparePipelineRuntimeTables, seedPipelineRuntimeSourceRows } from '../../support/fixtures/pipeline-test-data';

test.describe('pipeline history', () => {
  test('renders history for one pipeline and links runs to inspector route', async ({ page, request }) => {
    await preparePipelineRuntimeTables(request);
    await seedPipelineRuntimeSourceRows(request, [
      { id: 11, name: 'history-one', updateTime: '2026-03-18 11:00:00' },
      { id: 12, name: 'history-two', updateTime: '2026-03-18 11:01:00' },
    ]);

    const pipelineName = uniqueName('pw-history-pipeline');
    const pipeline = await importPipelineConfig(request, {
      folderId: null,
      pipelineName,
      fileName: `${pipelineName}.yml`,
      fileContent: minimalPipelineYaml(pipelineName),
    });

    const firstRun = await executePipeline(request, { pipelineId: pipeline.id });
    const secondRun = await executePipeline(request, { pipelineId: pipeline.id });

    await page.goto(`/pipelines/${pipeline.id}/runs`);

    await expect(page.getByRole('heading', { name: pipelineName })).toBeVisible();
    await expect(page.getByTestId(`history-run-row-${firstRun.id}`)).toBeVisible();
    await expect(page.getByTestId(`history-run-row-${secondRun.id}`)).toBeVisible();

    await page.getByTestId(`history-run-row-${secondRun.id}`).getByRole('button', { name: 'Inspect' }).click();
    await expect(page).toHaveURL(new RegExp(`/runs/${secondRun.id}$`));
  });
});
