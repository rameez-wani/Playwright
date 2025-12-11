import { test, expect } from '@playwright/test';
import { createEntity } from '../Helper/Entity'; 

test.use({
  viewport: {height: 1080,width: 1920}
});
test('Search entity', async ({ page }) => {
  
  const created = await createEntity(page);
  await page.waitForTimeout(10000);
   await page.locator('#globalSearchBox').click();
   await page.locator('#globalSearchBox').fill(created.randomText);
   await page.waitForTimeout(5000);
   await expect(page.locator(created.randomText)).toBeVisible();
   await expect(page.locator(created.randomPhone)).toBeVisible();
   await expect(page.locator(created.email)).toBeVisible();
  await page.waitForTimeout(5000);
});
