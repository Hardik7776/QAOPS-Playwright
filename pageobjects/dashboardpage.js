class dashboardpage{
    constructor(page){
this.product= page.locator(".card-body");
this.productstext= page.locator(".card-body b");
this.cart = page.locator("[routerlink*= 'card']");
    }
    async searchproduct(productname){
        const tittles = await this.productstext.alltextcontents();

console.log(tittles);

const count = await this.productstext.count()

for(let i=0;i<count;i++){
   if(await products.nth(i).locator("b").textContent()== productname){

await this.products.nth(i).locator("text = Add To Cart").click();
break;
   }
}
    }
   async navigatetocart()
{
   await this.cart.click()
}}
module.exports={dashboardpage};