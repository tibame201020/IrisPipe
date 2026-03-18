import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { executePipeline, importPipelineConfig } from '../../support/api/backend-api';
import { minimalPipelineYaml } from '../../support/fixtures/minimal-pipeline';
import { uniqueName } from '../../support/fixtures/unique-name';
import {
  preparePipelineRuntimeTables,
  prepareStopJobRuntimeTables,
  seedPipelineRuntimeSourceRows,
} from '../../support/fixtures/pipeline-test-data';
import { stopPipelineRun, waitForPipelineRunStatus } from '../../support/api/backend-api';

function stopJobPipelineYamlForPlaywright() {
  const source = readFileSync(
    resolve(process.cwd(), '../backend/k6/testfiles/job-pipeline-stop-job.yml'),
    'utf8',
  );

  return source.replaceAll('jdbc:h2:./h2data/data', 'jdbc:h2:./h2data/playwright');
}

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

  test('refreshes pipeline history after run control actions from the shared inspector', async ({ page, request }) => {
    test.setTimeout(180_000);

    await prepareStopJobRuntimeTables(request, 500_000);

    const pipelineName = uniqueName('pw-history-refresh');
    const pipeline = await importPipelineConfig(request, {
      folderId: null,
      pipelineName,
      fileName: 'job-pipeline-stop-job.yml',
      fileContent: stopJobPipelineYamlForPlaywright(),
    });

    const run = await executePipeline(request, {
      pipelineId: pipeline.id,
      useAsyncLaucher: true,
    });

    await waitForPipelineRunStatus(request, run.id, ['STARTED'], {
      timeoutMs: 30_000,
      intervalMs: 250,
    });
    await stopPipelineRun(request, run.id);
    await waitForPipelineRunStatus(request, run.id, ['STOPPED'], {
      timeoutMs: 90_000,
      intervalMs: 500,
    });

    await page.goto(`/pipelines/${pipeline.id}/runs`);
    await page.getByTestId(`history-run-row-${run.id}`).getByRole('button', { name: 'Inspect' }).click();
    await expect(page.getByTestId('run-inspector')).toContainText('STOPPED');

    await page.getByTestId('run-detail-focus-history-link').click();
    await expect(page).toHaveURL(new RegExp(`/pipelines/${pipeline.id}/runs$`));
    await expect(page.getByTestId('run-inspector')).toContainText(`Run #${run.id}`);
    await expect(page.getByTestId(`history-run-row-${run.id}`)).toContainText('STOPPED');

    await page.getByTestId('run-inspector-resume').click();
    await waitForPipelineRunStatus(request, run.id, ['STARTING', 'STARTED', 'COMPLETED'], {
      timeoutMs: 120_000,
      intervalMs: 500,
    });

    const historyResponse = await request.get(`http://127.0.0.1:8080/api/v1/sync-pipeline?pipelineId=${pipeline.id}&limit=5`, {
      headers: {
        'X-Iris-Workspace-Key': 'default',
      },
    });
    await expect(historyResponse.ok()).toBeTruthy();
    const historyPayload = await historyResponse.json();
    await expect(historyPayload[0]?.status).toMatch(/STARTING|STARTED|COMPLETED/);

    await expect(page.getByTestId(`history-run-row-${run.id}`)).toContainText(/STARTING|STARTED|COMPLETED/, {
      timeout: 30_000,
    });

    await waitForPipelineRunStatus(request, run.id, ['COMPLETED'], {
      timeoutMs: 120_000,
      intervalMs: 500,
    });
  });
});
