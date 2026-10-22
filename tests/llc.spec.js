import{test,expect}from '@playwright/test';
test('playwright special locators', async ({page}) =>{

await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page.getByLabel("Check me out if you Love IceCreams!").click();
await page.getByLabel("Employed").check();
await page.getByLabel("Gender").selectoption("female");
await page.getByPlaceholder("password").fill("abc123");
await page.getByRole("button",{name: 'submit'}).click();
await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

await expect( page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout:10000});
await page.getByRole("link",{name:'shop'}).click();
await page.locator("app-card").filter({hastext: "Nokia Edge"}).getByRole("button").click();

});