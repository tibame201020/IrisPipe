import { expect, test } from '@playwright/test';
import { createFolder, executePipeline, importPipelineConfig } from '../../support/api/backend-api';
import { minimalPipelineYaml } from '../../support/fixtures/minimal-pipeline';
import { uniqueName } from '../../support/fixtures/unique-name';

test.describe('validation shell', () => {
  test('keeps scroll ownership inside the active panel instead of scrolling the full page', async ({ page, request }) => {
    const parentFolder = await createFolder(request, uniqueName('pw-shell-scroll'));

    for (let index = 0; index < 18; index += 1) {
      await createFolder(request, uniqueName(`pw-shell-scroll-child-${index}`), parentFolder.id);
    }

    await page.goto(`/folders/${parentFolder.id}`);

    const windowScrollBefore = await page.evaluate(() => document.scrollingElement?.scrollTop ?? 0);
    await page.getByTestId('folder-view-subfolders').evaluate((element: HTMLElement) => {
      element.scrollTop = 320;
    });

    const subfolderPanelScroll = await page.getByTestId('folder-view-subfolders').evaluate((element: HTMLElement) => element.scrollTop);
    const shellMainScroll = await page.getByTestId('shell-main-region').evaluate((element: HTMLElement) => element.scrollTop);
    const windowScrollAfter = await page.evaluate(() => document.scrollingElement?.scrollTop ?? 0);

    expect(subfolderPanelScroll).toBeGreaterThan(0);
    expect(shellMainScroll).toBe(0);
    expect(windowScrollAfter).toBe(windowScrollBefore);
  });

  test('preserves shared inspector context across route transitions between run pages', async ({ page, request }) => {
    const pipelineName = uniqueName('pw-shell-route');
    const pipeline = await importPipelineConfig(request, {
      folderId: null,
      pipelineName,
      fileName: `${pipelineName}.yml`,
      fileContent: minimalPipelineYaml(pipelineName),
    });

    const run = await executePipeline(request, { pipelineId: pipeline.id });

    await page.goto('/recent');
    await page.getByTestId(`recent-run-row-${run.id}`).getByRole('button', { name: 'Inspect' }).click();

    await expect(page).toHaveURL(new RegExp(`/runs/${run.id}$`));
    await expect(page.getByTestId('run-inspector')).toContainText(`Run #${run.id}`);

    await page.getByTestId('run-detail-focus-history-link').click();
    await expect(page).toHaveURL(new RegExp(`/pipelines/${pipeline.id}/runs$`));
    await expect(page.getByTestId('run-inspector')).toContainText(`Run #${run.id}`);

    await page.locator(`a[href="/pipelines/${pipeline.id}"]`).first().click();
    await expect(page).toHaveURL(new RegExp(`/pipelines/${pipeline.id}$`));
    await expect(page.getByTestId('run-inspector')).toContainText(`Run #${run.id}`);

    await page.locator(`a[href="/pipelines/${pipeline.id}/config"]`).first().click();
    await expect(page).toHaveURL(new RegExp(`/pipelines/${pipeline.id}/config$`));
    await expect(page.getByTestId('run-inspector')).toContainText(`Run #${run.id}`);
  });
});
