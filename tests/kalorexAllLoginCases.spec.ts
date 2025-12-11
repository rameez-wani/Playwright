import { test, expect } from '@playwright/test';

test('Login Successful', async ({ page }) => {
  await page.goto('https://kalorex-dev.projectspreview.net/admin/');
  await page.getByRole('textbox', { name: 'Enter your email address' }).click();
  await page.getByRole('textbox', { name: 'Enter your email address' }).fill('platform.admin@yopmail.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Admin@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('text=Login successfully!')).toBeVisible();

});

test('Invalid Email', async ({ page }) => {
  await page.goto('https://kalorex-dev.projectspreview.net/admin/');
  await page.getByRole('textbox', { name: 'Enter your email address' }).click();
  await page.getByRole('textbox', { name: 'Enter your email address' }).fill('platform.admin1@yopmail.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Admin@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('text=Invalid credentials.')).toBeVisible();

});

test('Invalid Password', async ({ page }) => {
  await page.goto('https://kalorex-dev.projectspreview.net/admin/');
  await page.getByRole('textbox', { name: 'Enter your email address' }).click();
  await page.getByRole('textbox', { name: 'Enter your email address' }).fill('platform.admin@yopmail.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Admin@1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('text=Invalid credentials.')).toBeVisible();

});

test('Invalid Username & Invalid Password', async ({ page }) => {
  await page.goto('https://kalorex-dev.projectspreview.net/admin/');
  await page.getByRole('textbox', { name: 'Enter your email address' }).click();
  await page.getByRole('textbox', { name: 'Enter your email address' }).fill('platform.admin1@yopmail.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Admin@1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('text=Invalid credentials.')).toBeVisible();

});
