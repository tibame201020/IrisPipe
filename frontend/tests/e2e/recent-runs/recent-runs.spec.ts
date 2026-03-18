import { expect, test } from '@playwright/test';
import { executePipeline, importPipelineConfig } from '../../support/api/backend-api';
import { minimalPipelineYaml } from '../../support/fixtures/minimal-pipeline';
import { uniqueName } from '../../support/fixtures/unique-name';
import { preparePipelineRuntimeTables, seedPipelineRuntimeSourceRows } from '../../support/fixtures/pipeline-test-data';

test.describe('recent runs', () => {
  test('renders seeded recent runs and opens run detail route', async ({ page, request }) => {
    await preparePipelineRuntimeTables(request);
    await seedPipelineRuntimeSourceRows(request, [
      { id: 1, name: 'recent-one', updateTime: '2026-03-18 10:00:00' },
      { id: 2, name: 'recent-two', updateTime: '2026-03-18 10:01:00' },
    ]);

    const pipelineName = uniqueName('pw-recent-pipeline');
    const pipeline = await importPipelineConfig(request, {
      folderId: null,
      pipelineName,
      fileName: `${pipelineName}.yml`,
      fileContent: minimalPipelineYaml(pipelineName),
    });

    const run = await executePipeline(request, { pipelineId: pipeline.id });

    await page.goto('/recent');

    await expect(page.getByTestId('recent-runs-table')).toContainText(pipelineName);
    await expect(page.getByTestId(`recent-run-row-${run.id}`)).toContainText('COMPLETED');

    await page.getByTestId(`recent-run-row-${run.id}`).getByRole('button', { name: 'Inspect' }).click();
    await expect(page).toHaveURL(new RegExp(`/runs/${run.id}$`));
  });
});
