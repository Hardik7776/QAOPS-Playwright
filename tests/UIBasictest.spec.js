const {test, expect} = require('@playwright/test');



test('browser context playwrite test',async ({browser})=>
{

  
 const context = await browser.newContext();
 const page =await context.newPage();
   const username = page.locator('#username');
  const signIn = page.locator('#signInbtn');
  const cardTitles = page.locator(".card-body a");
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
// css 
await username.fill("rahulshetty"); 
await page.locator("[type='password']").fill("Learning@830$3mK2");
await page.locator("#signinbtn").click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).tocontainText('incorrect');

await username.fill("");
await username.fill("rahulshettyacademy");
await signIn.click();
console.log(cardTitles.first().textContent())
console.log(cardTitles.nth(1).textContent());
const attTitles = await cardTitles.allTextContents();
console.log(allTitles);

});
test.only('UI controls',async ({page})=>
{

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username = page.locator('#username');
     const signIn = page.locator('#signInbtn');

const dropdown = page.locator("select.form-control");
const documentlink = page.locator("[href*='documents-request']");
await dropdown.selectOption("consult");
//await page.pause();
 await page.locator(".radiotextsty").last().click();
await page.locator("#okaybtn").click();
console.log(await page.locator(".radiotextsty").last().isChecked());
await expect(page.locator(".radiotextsty").last().tobechecked());
await expect(page.locator("terms").click());
await page.locator("#terms").uncheck();
expect(await page.locator("#terms").isChecked()).tobefalsy();
await expect(documentlink).toHaveAttribute("class","blinkingtext");

 //await page.pause();

});
test.only('@child windoe hadl',async ({browser})=>{

 const context = await browser.newContext();
 const page =await context.newPage();
   const username = page.locator('#username');
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const documentlink = page.locator("[href*='documents-request']");
const [newpage]= await promise.all([
context.waitForEvent('page'),
documentlink.click(),
]);
const text = await newpage.locator(".red").textcontent();
const arraytext= text.split("@");
const domain = arraytext[1].split(" ")[0]
console.log(domain);
await page.locator("#username").fill(domain);
await page.pause();
console.log(await page.locator ("#username").textcontent());
});