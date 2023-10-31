



import React, { ReactElement, useState } from "react";
import './Styling.css';

let RenderInstagram : React.FC<{}> = (props) => { 
    
    let [rerender, setRender] = useState(0);

    



    // EMBEDED INSTAGRAM FEED
    React.useEffect(() => 
    {
        // Code to append the script and div elements to the DOM
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.dataset.useServiceCore = "true";
        script.defer = true;
        document.head.appendChild(script);

        // remove advertisiment TAG
        let removeTag = (item :Event ) => { 
            let k = item.target as HTMLDivElement;
            if (k.innerText != undefined){
                if (k.innerText.includes("Free Instagram Feed widget")){
                    k.style.display = "none";
                    document.removeEventListener("DOMNodeInserted", removeTag);
                }
            }
            
        }

        document.addEventListener('DOMNodeInserted', removeTag);
    }, []);

    

    return (
        <>
            <div style ={{ width:'100%', minHeight :'100vh', padding :'2%', boxSizing:'border-box', display :'flex', justifyContent:'center'}}>                
                <div id = "instagramContainer" style = {{width:'80%', overflow:'hidden', borderRadius:'1.5em', padding :'1.3%' , boxSizing:"border-box"}}>
                    <div style={{width:"100%"}} className="elfsight-app-612694ea-26e5-458e-966f-4faf15207705" data-elfsight-app-lazy></div>
                </div>
            
            </div>

        </>
    )



}

export default RenderInstagram;