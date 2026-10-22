const {test, expect} = require('@playwright/test');

test('more validation test ', async ({page})=> {



    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#dispalyed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#dispalyed-text")).not.toBeHidden();
   // await page.pause();
    page.on('.dialog',dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();
const framespage =page.frameLocator("#courses-iframe");
    await framespage.locator("li a[href*='lifetime-access':visible").click();
const textcheck= await framespage.locator(".text h2").textContent();
console.log(textcheck.split(" ")[1]);
});