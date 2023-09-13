


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
        this.reload();
    }

    /** Reload the page (i.e. re-render all component at root via pageRefresh callbackFucnt ) */
    reload(){
        if (this.pageRefresh != undefined) this.pageRefresh();
        else console.error("Cannot refresh root component, callback fucnt not initialised!");
    }

    /** Callback function where new page is provided. This funct is overriding*/
    setReload( callbackFunct : () => void ){
        console.log("Call back funct established");
        this.pageRefresh = callbackFunct;
    }




    
      /*
        Description : 
                Given an array of urls, getImage(urls) returns a Promise<HTMLImageElement[]> object representation of the given url.
        Parameters :
            url : Array of strings representative of URLs.
        Returns : 
            1)  on resolve : a Promise<HTMLImageElement[]>  of url are given. 
            2)  on reject  : undifined, loading failed!
    */

            getImage = (imagePath : string) : Promise<HTMLImageElement> =>
            {
        
                console.log("Browser Get Request on image urls being perfomed : " + imagePath) ;
                let imageToReturn  : HTMLImageElement = new Image();
        
                let loadImageFunc  = async () => 
                {
                    return await new Promise <HTMLImageElement> ((resolve, reject)=> 
                    {
                            imageToReturn.src = imagePath;
                            imageToReturn.onload = () =>          /* Note : Asycnronous operation (i.e. daemon / background thread), loop may finish before onLoad handler */
                            {
                                resolve(imageToReturn);
                            }
                            imageToReturn.onerror = () =>
                            {
                                reject();
                            }
                    });
                };
                return loadImageFunc();
            }
        


    


}


let Browser = new MyBrowser();

export default Browser;