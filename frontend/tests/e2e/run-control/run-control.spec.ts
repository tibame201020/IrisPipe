import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  executePipeline,
  importPipelineConfig,
  waitForPipelineRunStatus,
} from '../../support/api/backend-api';
import { minimalPipelineYaml } from '../../support/fixtures/minimal-pipeline';
import { prepareStopJobRuntimeTables } from '../../support/fixtures/pipeline-test-data';
import { uniqueName } from '../../support/fixtures/unique-name';

function stopJobPipelineYamlForPlaywright() {
  const source = readFileSync(
    resolve(process.cwd(), '../backend/k6/testfiles/job-pipeline-stop-job.yml'),
    'utf8',
  );

  return source.replaceAll('jdbc:h2:./h2data/data', 'jdbc:h2:./h2data/playwright');
}

test.describe('run control', () => {
  test('stops an active run and resumes it through the inspector', async ({ page, request }) => {
    test.setTimeout(180_000);

    await prepareStopJobRuntimeTables(request, 500_000);

    const pipelineName = uniqueName('pw-run-stop-resume');
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

    await page.goto(`/runs/${run.id}`);

    await expect(page.getByTestId('run-inspector-stop')).toBeEnabled();
    await page.getByTestId('run-inspector-stop').click();

    await waitForPipelineRunStatus(request, run.id, ['STOPPED'], {
      timeoutMs: 90_000,
      intervalMs: 500,
    });

    await expect(page.getByTestId('run-inspector')).toContainText('STOPPED');
    await expect(page.getByTestId('run-inspector-resume')).toBeEnabled();
    await page.getByTestId('run-inspector-resume').click();

    await waitForPipelineRunStatus(request, run.id, ['COMPLETED'], {
      timeoutMs: 120_000,
      intervalMs: 500,
    });

    await expect(page.getByTestId('run-inspector')).toContainText('COMPLETED');
    await expect(page.getByTestId('run-inspector-attempts')).toContainText('RESUME');
  });

  test('reruns a completed run and deletes the rerun through the inspector', async ({ page, request }) => {
    const pipelineName = uniqueName('pw-run-rerun-delete');
    const pipeline = await importPipelineConfig(request, {
      folderId: null,
      pipelineName,
      fileName: `${pipelineName}.yml`,
      fileContent: minimalPipelineYaml(pipelineName),
    });

    const initialRun = await executePipeline(request, { pipelineId: pipeline.id });

    await page.goto(`/runs/${initialRun.id}`);

    await expect(page.getByTestId('run-inspector-rerun')).toBeEnabled();
    await page.getByTestId('run-inspector-rerun').click();

    await page.waitForURL((url) => {
      return /\/runs\/\d+$/.test(url.pathname) && url.pathname !== `/runs/${initialRun.id}`;
    });

    const rerunId = Number(page.url().split('/').at(-1));
    await waitForPipelineRunStatus(request, rerunId, ['COMPLETED', 'FAILED', 'STOPPED', 'ABANDONED', 'UNKNOWN'], {
      timeoutMs: 90_000,
      intervalMs: 500,
    });

    await expect(page.getByTestId('run-inspector')).toContainText(`Run #${rerunId}`);
    await expect(page.getByTestId('run-inspector-delete')).toBeEnabled();

    await page.getByTestId('run-inspector-delete').click();
    await expect(page.getByTestId('run-inspector-delete-dialog')).toBeVisible();
    await page.getByTestId('run-inspector-delete-confirm').click();

    await expect(page).toHaveURL(/\/recent$/);
    await expect(page.getByTestId('run-inspector')).toContainText('No run selected');
  });
});
