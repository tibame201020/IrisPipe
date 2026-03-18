import { expect, test } from '@playwright/test';

test.describe('shell bootstrap', () => {
  test('loads the shell with workspace and backend status', async ({ page }) => {
    await page.goto('/recent');

    await expect(page.getByTestId('app-shell')).toBeVisible();
    await expect(page.getByTestId('shell-header')).toContainText('IrisPipe');
    await expect(page.getByTestId('workspace-chip')).toContainText('Default Workspace');
    await expect(page.getByTestId('sidebar-navigation')).toBeVisible();
    await expect(page.getByTestId('backend-status')).toContainText('UP');
    await expect(page.getByTestId('shell-status-bar')).toBeVisible();
  });
});
