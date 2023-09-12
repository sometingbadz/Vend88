


class MyBrowser{


    private currentPage : string | undefined;                                               // current page string excluding the root.
    private pageRefresh :(() => void) | undefined;                                          // calllback fucnt where new page is provided
    // React.Dispatch<React.SetStateAction<string>> | undefined;     // component refresher through useState callback


    constructor(){
        console.log("My browser created");
        this.setPage(document.location.hash.toLocaleLowerCase());
        console.log("Page = " + this.currentPage);
        this.pageRefresh = undefined;
    }

    getPage(){
        return this.currentPage;
    }

    /** Set a new page and refresh the page */
    setPage(newPage : string){
        this.currentPage = newPage;
        window.history.pushState({}, '', this.currentPage);                // Change the URL

        if (this.pageRefresh != undefined){
            this.pageRefresh();
        }
    } 

    /** Callback function where new page is provided. This funct is overriding*/
    setCallback( callbackFunct : () => void ){
        console.log("Call back funct established");
        this.pageRefresh = callbackFunct;
    }





    


}


let Browser = new MyBrowser();

export default Browser;