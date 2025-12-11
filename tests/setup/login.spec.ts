import { test, expect } from '@playwright/test';

test('login and save storage state', async ({ page }) => {
  // Go to login page
  await page.goto('https://kalorex-dev.projectspreview.net/admin/');
  await page.getByPlaceholder('Enter your email address').fill('platform.admin@yopmail.com');
  await page.getByPlaceholder('Enter your password').fill('Admin@123'); 
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('text=Login successfully!')).toBeVisible();
  await page.context().storageState({ path: 'storageState.json' });
});