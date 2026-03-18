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

  test('creates a child folder and imports a pipeline from the folder view', async ({ page, request }) => {
    const parentFolder = await createFolder(request, uniqueName('pw-folder-actions-parent'));
    const childFolderName = uniqueName('pw-folder-actions-child');
    const pipelineName = uniqueName('pw-folder-actions-pipeline');

    await page.goto(`/folders/${parentFolder.id}`);

    await page.getByTestId('folder-view-create-folder').click();
    await expect(page.getByTestId('folder-view-create-folder-dialog')).toBeVisible();
    await page.getByTestId('folder-view-create-folder-name').fill(childFolderName);
    await page.getByTestId('folder-view-create-folder-confirm').click();

    await expect(page).toHaveURL(/\/folders\/\d+$/);
    await expect(page.getByRole('heading', { name: `Folder: ${childFolderName}` })).toBeVisible();
    await expect(page.getByTestId('folder-view-success')).toContainText('Folder created');

    await page.goto(`/folders/${parentFolder.id}`);

    await page.getByTestId('folder-view-import-pipeline').click();
    await expect(page.getByTestId('folder-view-import-pipeline-dialog')).toBeVisible();
    await page.getByTestId('folder-view-import-pipeline-name').fill(pipelineName);
    await page.getByTestId('folder-view-import-file-input').setInputFiles({
      name: `${pipelineName}.yml`,
      mimeType: 'application/x-yaml',
      buffer: Buffer.from(minimalPipelineYaml(pipelineName)),
    });
    await page.getByTestId('folder-view-import-pipeline-confirm').click();

    await expect(page).toHaveURL(/\/pipelines\/\d+$/);
    await expect(page.getByRole('heading', { name: pipelineName })).toBeVisible();
    await expect(page.getByTestId('sidebar-tree')).toContainText(pipelineName);
  });

  test('renders backend bad-request and conflict messages inline for folder mutations', async ({ page, request }) => {
    const parentFolder = await createFolder(request, uniqueName('pw-folder-error-parent'));
    const existingFolder = await createFolder(request, uniqueName('pw-folder-error-existing'), parentFolder.id);

    await page.goto(`/folders/${parentFolder.id}`);

    await page.getByTestId('folder-view-create-folder').click();
    await page.getByTestId('folder-view-create-folder-name').fill('bad/name');
    await page.getByTestId('folder-view-create-folder-confirm').click();

    await expect(page.getByTestId('folder-view-error')).toContainText('folderName contains unsupported characters');

    await page.getByTestId('folder-view-create-folder-name').fill(existingFolder.folderName);
    await page.getByTestId('folder-view-create-folder-confirm').click();

    await expect(page.getByTestId('folder-view-error')).toContainText('Folder already exists in target parent');
  });

  test('creates a starter pipeline from the folder view and opens config editor', async ({ page, request }) => {
    const parentFolder = await createFolder(request, uniqueName('pw-create-pipeline-parent'));
    const pipelineName = uniqueName('pw-create-pipeline');

    await page.goto(`/folders/${parentFolder.id}`);

    await page.getByTestId('folder-view-create-pipeline').click();
    await expect(page.getByTestId('folder-view-create-pipeline-dialog')).toBeVisible();
    await page.getByTestId('folder-view-create-pipeline-name').fill(pipelineName);
    await page.getByTestId('folder-view-create-pipeline-confirm').click();

    await expect(page).toHaveURL(/\/pipelines\/\d+\/config$/);
    await expect(page.getByRole('heading', { name: pipelineName })).toBeVisible();
    await expect(page.getByTestId('pipeline-config-editor-name-input')).toHaveValue(pipelineName);
    await expect(page.getByTestId('pipeline-config-editor-job-outline')).toContainText('_job');
    await expect(page.getByTestId('pipeline-config-editor-step-type-input')).toHaveValue('EXECUTE');
    await expect(page.getByTestId('sidebar-tree')).toContainText(pipelineName);
  });

  test('renames a folder inline and opens pipeline routes from the row menu', async ({ page, request }) => {
    const parentFolder = await createFolder(request, uniqueName('pw-folder-menu-parent'));
    const childFolder = await createFolder(request, uniqueName('pw-folder-menu-child'), parentFolder.id);
    const renamedFolderName = uniqueName('pw-folder-menu-renamed');
    const pipelineName = uniqueName('pw-folder-menu-pipeline');
    const pipeline = await importPipelineConfig(request, {
      folderId: parentFolder.id,
      pipelineName,
      fileName: `${pipelineName}.yml`,
      fileContent: minimalPipelineYaml(pipelineName),
    });

    await page.goto(`/folders/${parentFolder.id}`);

    await page.getByTestId(`folder-view-folder-menu-button-${childFolder.id}`).click();
    await expect(page.getByTestId(`folder-view-folder-menu-${childFolder.id}`)).toBeVisible();
    await page.getByTestId(`folder-view-folder-menu-${childFolder.id}`).getByRole('button', { name: 'Rename' }).click();

    await page.getByTestId(`folder-view-rename-input-${childFolder.id}`).fill(renamedFolderName);
    await page.getByTestId(`folder-view-rename-save-${childFolder.id}`).click();

    await expect(page.getByTestId('folder-view-success')).toContainText('Folder renamed');
    await expect(page.getByTestId(`folder-view-folder-${childFolder.id}`)).toContainText(renamedFolderName);
    await expect(page.getByTestId('sidebar-tree')).toContainText(renamedFolderName);

    await page.getByTestId(`folder-view-pipeline-menu-button-${pipeline.id}`).click();
    await expect(page.getByTestId(`folder-view-pipeline-menu-${pipeline.id}`)).toBeVisible();
    await page.getByTestId(`folder-view-pipeline-menu-${pipeline.id}`).getByRole('button', { name: 'Open Config' }).click();

    await expect(page).toHaveURL(new RegExp(`/pipelines/${pipeline.id}/config$`));
    await expect(page.getByRole('heading', { name: pipelineName })).toBeVisible();
  });
});
