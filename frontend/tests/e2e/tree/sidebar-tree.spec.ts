import { expect, test } from '@playwright/test';
import { createFolder, importPipelineConfig } from '../../support/api/backend-api';
import { uniqueName } from '../../support/fixtures/unique-name';
import { minimalPipelineYaml } from '../../support/fixtures/minimal-pipeline';

test.describe('sidebar tree', () => {
  test('renders seeded folder and pipeline nodes', async ({ page, request }) => {
    const folderName = uniqueName('pw-folder');
    const pipelineName = uniqueName('pw-pipeline');

    const folder = await createFolder(request, folderName);
    await importPipelineConfig(request, {
      folderId: folder.id,
      pipelineName,
      fileName: `${pipelineName}.yml`,
      fileContent: minimalPipelineYaml(),
    });

    await page.goto('/recent');

    await expect(page.getByTestId('sidebar-tree')).toContainText(folderName);
    await expect(page.getByTestId('sidebar-tree')).toContainText(pipelineName);
  });
});
