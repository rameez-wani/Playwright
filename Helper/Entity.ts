import { Page, expect } from '@playwright/test';
import { RandomData } from '../Object/object';

export async function createEntity(page: Page) {
  

  const randomText = RandomData.randomAlphaNumeric();
  const randomPhone = RandomData.randomNumber(10);
  const email = RandomData.randomEmail();

  await page.goto('https://kalorex-dev.projectspreview.net/admin/dashboard/');
  await page.getByTitle('Entities', { exact: true }).click();
  await page.getByTitle('Add Entity').click();
  await page.getByRole('textbox', { name: 'Employee ID' }).fill(randomText);
  await page.getByRole('textbox', { name: 'Full Name *' }).fill(randomText);
  await page.getByRole('textbox', { name: 'Designation' }).fill('CEO');
  await page.getByRole('textbox', { name: 'Email *' }).fill(email);
  await page.getByRole('textbox', { name: 'Contact Number *' }).fill(randomPhone);
  await page.getByRole('treeitem', { name: 'Male', exact: true }).click();
  await page.getByRole('textbox', { name: 'Full Name of the Entity *' }).fill('University of Thailand');

  await page.getByText('Select Type of Entity').click();
  await page.getByRole('treeitem', { name: 'SECTION' }).click();

  await page.getByRole('textbox', { name: 'Full Registered Address' }).fill('Polo View, Greenland sector C');

  await page.getByText('Select State').click();
  await page.locator('input[type="search"]').fill('guj');
  await page.getByRole('treeitem', { name: 'Gujarat' }).click();

  await page.locator('#select2-city-container').click();
  await page.locator('input[type="search"]').fill('ahmedabad');
  await page.locator('li.select2-results__option', { hasText: 'Ahmedabad' }).first().click();

  await page.getByRole('textbox', { name: 'Pin Code *' }).fill('123546');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('text=Entity added successfully')).toBeVisible();

  return {
    randomText,
    email,
    randomPhone,
  };
}