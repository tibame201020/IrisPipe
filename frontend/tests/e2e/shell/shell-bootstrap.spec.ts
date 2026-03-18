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

  test('shows a shell warning when backend health is down', async ({ page }) => {
    await page.route('**/actuator/health', async (route) => {
      await route.fulfill({
        status: 503,
        contentType: 'application/json',
        body: JSON.stringify({ status: 'DOWN' }),
      });
    });

    await page.goto('/recent');

    await expect(page.getByTestId('shell-backend-warning')).toContainText('Backend unavailable');
    await expect(page.getByTestId('backend-status')).toContainText('DOWN');
  });

  test('supports compact shell toggles on narrower widths', async ({ page }) => {
    await page.setViewportSize({ width: 1100, height: 900 });
    await page.goto('/recent');

    await expect(page.getByTestId('shell-header-toggle-sidebar')).toBeVisible();
    await expect(page.getByTestId('shell-header-toggle-inspector')).toBeVisible();
    await expect(page.getByTestId('shell-overlay')).toHaveCount(0);

    await page.getByTestId('shell-header-toggle-sidebar').click();
    await expect(page.getByTestId('shell-sidebar-region')).toHaveClass(/shell-panel-region--open/);
    await expect(page.getByTestId('shell-overlay')).toBeVisible();

    await page.getByTestId('shell-overlay').click();
    await expect(page.getByTestId('shell-sidebar-region')).not.toHaveClass(/shell-panel-region--open/);

    await page.getByTestId('shell-header-toggle-inspector').click();
    await expect(page.getByTestId('shell-inspector-region')).toHaveClass(/shell-panel-region--open/);
    await expect(page.getByTestId('run-inspector')).toBeVisible();
  });
});
