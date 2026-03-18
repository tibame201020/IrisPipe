import { expect, test } from '@playwright/test';
import { createFolder, importPipelineConfig } from '../../support/api/backend-api';
import { uniqueName } from '../../support/fixtures/unique-name';
import { minimalPipelineYaml } from '../../support/fixtures/minimal-pipeline';

test.describe('folder view', () => {
  test('renders selected folder contents and keeps tree selection in sync with route', async ({ page, request }) => {
    const parentFolder = await createFolder(request, uniqueName('pw-folder-parent'));
    const childFolder = await createFolder(request, uniqueName('pw-folder-child'), parentFolder.id);
    const pipelineName = uniqueName('pw-folder-pipeline');
    const pipeline = await importPipelineConfig(request, {
      folderId: parentFolder.id,
      pipelineName,
      fileName: `${pipelineName}.yml`,
      fileContent: minimalPipelineYaml(pipelineName),
    });

    await page.goto(`/folders/${parentFolder.id}`);

    await expect(page.getByRole('heading', { name: parentFolder.folderPath })).toBeVisible();
    await expect(page.getByTestId('status-selected-folder')).toContainText(String(parentFolder.id));
    await expect(page.getByTestId('folder-view-subfolders')).toContainText(childFolder.folderName);
    await expect(page.getByTestId('folder-view-pipelines')).toContainText(pipelineName);

    await page.getByTestId(`folder-view-pipeline-${pipeline.id}`).getByRole('button', { name: 'Open' }).click();
    await expect(page).toHaveURL(new RegExp(`/pipelines/${pipeline.id}$`));
    await expect(page.getByTestId('status-selected-pipeline')).toContainText(String(pipeline.id));
  });
});
