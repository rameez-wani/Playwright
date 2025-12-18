import {test, expect}  from '@playwright/test';


test('shopping', async ({page})=>
{
const email= "rw1115@yopmail.com";
const password="Pass@123"
const ordername="ADIDAS ORIGINAL"
const price="$ 11500"
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.title();
await page.locator('a.text-reset').click()
await page.locator("#firstName").fill('Rameez1115')
await page.locator("#lastName").fill('Wani1115')
await page.locator("#userEmail").fill(email)
await page.locator("#userMobile").fill('1234567890')
await page.locator('select.custom-select').selectOption('Engineer')
await page.locator('#userPassword').fill(password)
await page.locator('#confirmPassword').fill(password)
await page.locator('input[type="checkbox"]').click();
await page.locator('#login').click();
await expect(page.locator('.headcolor')).toContainText('Account Created Successfully');
await page.locator('.btn.btn-primary').click();
await page.locator('#userEmail').fill(email);
await page.locator('#userPassword').fill(password);
await page.locator('#login').click();
await expect(page.locator('h3').nth(0)).toHaveText('Automation');
await expect(page.locator('b').nth(3)).toHaveText(ordername)
await expect(page.locator('.d-flex').nth(2)).toHaveText(price)
await page.locator('button').nth(8).click()
await page.locator('button').nth(2).click()
await expect(page.locator('h3').nth(1)).toHaveText(ordername);
await expect(page.locator('p').nth(4)).toHaveText(price)
const OrderID= await page.locator('p').nth(1).textContent()
await page.locator('button[type="button"]').nth(1).click()
await page.locator('input[type="text"]').nth(0).fill('4542 9931 9292 2293')
await page.locator('select.input').nth(0).selectOption('11')
await page.locator('select.input').nth(1).selectOption('28')
await page.locator('input[type="text"]').nth(1).fill('123')
await page.locator('input[type="text"]').nth(2).fill('Rameez Wani')
await page.locator('input[type="text"]').nth(3).fill('rahulshettyacademy')
await page.locator('button[type="submit"]').click()
await expect(page.locator('p').nth(1)).toHaveText('* Coupon Applied')
await page.locator('input[type="text"]').nth(4).fill(email)
await page.locator('.form-group').click()
await page.keyboard.type('indi');
await page.locator('.ta-item').nth(1).click()
await page.locator('a').nth(1).click()
await expect (page.locator('h1')).toHaveText('Thankyou for the order. ')
const RefId=await page.locator('label').nth(4).textContent()
if (!RefId) {
  throw new Error('RefId text is null or empty');
}
const AT=RefId.split(" ")
const ReferenceID = AT[2]
await page.locator('label').nth(3).click()
await page.waitForTimeout(8000);
const rows = page.locator('table tbody tr');
const rowCount = await rows.count();
for (let i = 0; i < rowCount; i++) 
    {
  const row = rows.nth(i);
  const text = await row.textContent();
  if (text?.includes(ReferenceID))
     {
    await row.locator('button', { hasText: 'View' }).click();
    break;
     }
    }
await expect (page.locator('p').nth(1)).toHaveText('Thank you for Shopping With Us')
await expect (page.locator('p').nth(2)).toHaveText(email)
await expect (page.locator('.col-text')).toHaveText(ReferenceID)
});