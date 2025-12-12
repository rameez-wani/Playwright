import { test, expect } from '@playwright/test';
import { createEntity } from '../Helper/Entity'; 

test.use({
  viewport: {height: 1080,width: 1920}
});
test('Make Entity Inactive and then Active', async ({ page }) => {
  await page.goto('https://kalorex-dev.projectspreview.net/admin/entities');
  await page.locator('#globalSearchBox').click();
  await page.locator('#globalSearchBox').fill('BkUZy');
  await page.locator('#globalSearchBox').press('Enter');
  await page.waitForTimeout(5000);
  await page.getByRole('row', { name: 'Entities University of Thaila' }).getByRole('checkbox').check();
  await page.getByTitle('Inactive').click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.waitForTimeout(5000);
  await expect(page.getByText('Entities status updated successfully to Inactive')).toBeVisible();
  await page.waitForTimeout(5000);
  await page.getByRole('row', { name: 'Entities University of Thaila' }).getByRole('checkbox').check();
  await page.getByTitle('Active', { exact: true }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.waitForTimeout(5000);
  await page.getByText('Entities status updated successfully to Active').click();
  await page.waitForTimeout(5000);
  
});


