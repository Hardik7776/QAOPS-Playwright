const{loginpage}= require('./loginpage');
const{dashboardpage}= require('./dashboardpage');

class POmanager{
    constructor(page){
        this.page=page;
        this.loginpage = new loginpage(page);
        this.dashboardpage = new dashboardpage(page);
    }

    getloginpage(){
        return this.loginpage;
    }

    getdashbardpage(){
        return this.dashboardpage;
    }
}
module.exports={POmanager};