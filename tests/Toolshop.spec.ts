    import { test, expect } from '@playwright/test';

//     test('purchase a tool', async ({ page }) => {
// const price="13.41"

//   await page.goto('https://practicesoftwaretesting.com/'); 
//   await page.locator('.form-select').selectOption({ value: 'price,desc' });
 //const Pricevalue= await page.locator('.ngx-slider-pointer').last().getAttribute('aria-valuemax');
// console.log(Pricevalue)

//   await page.locator('input[value="01KFSVT4H3QR7Q7C1J345HKSA3"]').click()
//   await page.locator('input[value="01KFSVT4H3QR7Q7C1J345HKSA5"]').click()
//   await page.locator('input[value="01KFSVT4H3QR7Q7C1J345HKSA6"]').click()
 
//});


test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/'); 
  await page.locator('[data-test="sort"]').selectOption('price,desc');
  //slider ---
  await page.getByRole('checkbox', { name: 'Hammer' }).check();
  await page.getByRole('checkbox', { name: 'Wrench' }).check();
  await page.getByRole('checkbox', { name: 'Screwdriver' }).check();
  await page.waitForTimeout(5000);

  await page.locator('[data-test="product-name"]').nth(2).click();
  await page.waitForTimeout(5000);
  expect (page.locator('[data-test="product-name"]')).toHaveText(' Claw Hammer with Fiberglass Handle ')
  expect (page.locator('[data-test="unit-price"]')).toHaveText('20.14')

  for (let i = 0; i < 4; i++)
      {
  await page.locator('[data-test="increase-quantity"]').click();
       }
//   await page.locator('[data-test="increase-quantity"]').click();
//   await page.locator('[data-test="increase-quantity"]').click();
//   await page.locator('[data-test="increase-quantity"]').click();
//   await page.locator('[data-test="increase-quantity"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  const sucessmessage= page.getByRole('alert', { name: 'Product added to shopping' })
  await expect(sucessmessage).toBeVisible();
  await page.locator('[data-test="nav-cart"]').click();
    await page.waitForTimeout(5000);

  expect (page.locator('[data-test="product-title"]')).toContainText('Claw Hammer with Fiberglass Handle ')
  expect (page.locator('[data-test="product-quantity"]')).toHaveValue('5')
  expect (page.locator('[data-test="product-price"]')).toHaveText('$20.14')
  expect (page.locator('[data-test="line-price"]')).toHaveText('$100.70')
});