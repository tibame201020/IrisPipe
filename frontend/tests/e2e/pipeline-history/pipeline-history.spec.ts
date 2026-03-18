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

  test('loads older history rows through pagination', async ({ page, request }) => {
    await preparePipelineRuntimeTables(request);
    await seedPipelineRuntimeSourceRows(request, [
      { id: 31, name: 'history-page-one', updateTime: '2026-03-18 13:00:00' },
      { id: 32, name: 'history-page-two', updateTime: '2026-03-18 13:01:00' },
    ]);

    const pipelineName = uniqueName('pw-history-pagination');
    const pipeline = await importPipelineConfig(request, {
      folderId: null,
      pipelineName,
      fileName: `${pipelineName}.yml`,
      fileContent: minimalPipelineYaml(pipelineName),
    });

    const runs = [];
    for (let index = 0; index < 6; index += 1) {
      runs.push(await executePipeline(request, { pipelineId: pipeline.id }));
    }

    const oldestRun = runs[0];
    const newestRun = runs.at(-1);

    await page.goto(`/pipelines/${pipeline.id}/runs`);

    await expect(page.getByTestId(`history-run-row-${newestRun?.id}`)).toBeVisible();
    await expect(page.getByTestId(`history-run-row-${oldestRun.id}`)).toHaveCount(0);
    await expect(page.getByTestId('pipeline-history-load-more')).toBeVisible();

    await page.getByTestId('pipeline-history-load-more').click();

    await expect(page.getByTestId(`history-run-row-${oldestRun.id}`)).toBeVisible();
  });
});
