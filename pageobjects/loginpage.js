class loginpage{
    constructor(page){
        this.page=page;
        this.signinbtn= page.locator("[value='login']");
        this.username=page.locator("#userEmail");
        this.password= page.locator("#userpassword");
    }
     async goto(){
        await this.page.goto("https://rahulshettyacademy.com/client");
    }
    async validlogin(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signinbtn.click();
    }
}
module.exports={loginpage};