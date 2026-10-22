const { test, expect } = require('@playwright/test');

test('@Web Client App login', async ({ page }) => {
    const email="hardikcharaya1234@gmail.com";
const productname ='zara coat 3';
    const products = page.locator(".card-body");
await page.goto("https://rahulshettyacademy.com/client");
await page.locator("#userEmail").fill(email);
await page.locator("#userPassword").fill("Charaya@12");
await page.locator("[value='Login']").click();
await page.locator(".card-body").first().waitfor();
await page.waitforloadstate('networkidle');
const tittles = await page.locator(".card-body b").alltextcontents();

console.log(tittles);

const count = await product.count()

for(let i=0;i<count;i++){
   if(await products.nth(i).locator("b").textContent()== productname){

await products.nth(i).locator("text = Add To Cart").click();
break;
}
}
await page.locator("[routerlink*='cart']").click();
await page.locator("div li ").first().waitFor();
 const bool= await  page.locator("h3:has-text('zara coat 3')").isVisible();
expect(bool).toBeTruthy();
await page.locator("text= checkout").click();
await page.locator("[placeholder*='country']").pressSequentially("ind",{delay: 150});
const dropdown= page.locator(".ta-results");
await dropdown.waitfor();
 const optioncount = await dropdown.locator("button").count();
 for(let i =0;i<optioncount;i++){
   const text=  await dropdown.locator("button").nth(i).textContent();
   if(text ===" India"){
    await dropdown.locator("button").nth(i).click();
    break;
   }
 }
await expect (page.locator(".user__name[type'text']")).first().tohavetext(email);
await page.locator(".action__sunmit").click();
await expect (page.locator(".hero-primary")).tohavetext(" thankyou for the order. ");
const orderid =await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderid);
await page.locator("button[routerlink*= 'myorder']").click();
await page.locator("tbody").waitfor();
const row = await page.addLocatorHandler("tbody tr");

for
(let i=0;i<await rows.count();i++){
   const roworderid= rows.nth(i).locator("th").textcontext();
   if(orderid.includes(roworderid)){
    await rows.nth(i).locator("button").first().click();
    break;
   }
}
const orderiddetails= await page.locator(".col-text").textContent();
expect (orderid.includes(orderiddetails)).toBeTruthy();
}); 