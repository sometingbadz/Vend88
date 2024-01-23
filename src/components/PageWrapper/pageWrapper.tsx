import { useLayoutEffect } from "react";
import React from "react";
import MyBrowser from "../../Browser/MyBrowser";



let RenderPage : React.FC<{children : React.ReactNode}> = (props) => { 
    let [headerHeight, setHeaderHeight] = React.useState(0);        // height sizing offset
    let MaxPageWidth = 3000;             // max page size width
    let Footer =
    <>
        <div className='fooder' style ={{fontWeight:'bold', width:`100vw`, textAlign:'center', background:'white', padding:'1%', marginTop:'25px', boxSizing:'border-box', marginBottom:'1%'}}>
            [Vend88] - Copyright © 2024 
        </div>    
    </>

    useLayoutEffect(
        () => { 
            // window.scrollTo(0,0);

            // check new header height
            let changeHeaderHeight = () => {
                console.log("Header height = " + headerHeight);

                // set header spacing
                let header = document.getElementById("header");
                if (header!= null) setHeaderHeight(header.offsetHeight);
                // else setHeaderHeight(0);
            }
            
            // resize action listener to re-initialise header height
            window.addEventListener("resize", changeHeaderHeight);
            changeHeaderHeight();
            return () => {
                window.removeEventListener("resize", changeHeaderHeight  );
            }
        }
    )

    console.log("Header height = " + headerHeight);

    return (
        <> 
            <div style = {{width:"100%",  display:'flex', justifyContent : 'center', minHeight:'100vh'}}>
                <div id = "pageWrapper" style = {
                    {
                        width: `${MaxPageWidth}px`,
                        maxWidth:'3000px', position :'relative', overflow:'hidden'
                        ,background:'#fcfbfc', minWidth:'220px',
                    }}>
                    <div style = {{height : `${headerHeight}px`}}> </div>

                     
                    {props.children}
                </div>

            </div>
            {Footer}
        </>
    )
}

export default RenderPage;