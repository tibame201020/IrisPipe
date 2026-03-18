import { expect, test } from '@playwright/test';
import { createFolder } from '../../support/api/backend-api';
import { uniqueName } from '../../support/fixtures/unique-name';

test.describe('route navigation', () => {
  test('opens the recent page from shell navigation', async ({ page }) => {
    await page.goto('/recent');

    await page.getByTestId('nav-recent').click();
    await expect(page).toHaveURL(/\/recent$/);
  });

  test('opens a seeded folder route from the sidebar tree', async ({ page, request }) => {
    const folder = await createFolder(request, uniqueName('pw-nav-folder'));

    await page.goto('/recent');
    await page.getByTestId(`tree-folder-${folder.id}`).click();

    await expect(page).toHaveURL(new RegExp(`/folders/${folder.id}$`));
  });
});
