import { test, expect } from '@playwright/test';
 
test('Login to demowebshop', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator('//a[@class="ico-login"]').click();
    await page.locator('//input[@id="Email"]').fill('roshinijk@gmail.com');
    await page.locator('//input[@id="Password"]').fill('Roshini');
    await page.locator('//input[@class="button-1 login-button"]').click();
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
   
});
