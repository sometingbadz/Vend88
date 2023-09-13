import React, { useEffect, useLayoutEffect } from "react";
import "./styling.css";
import HeaderPopUp from "./HeaderPopUp";

import HeadingContent, {HeaderItem} from './HeadingContent';
import MyBrowser from "../../Browser/MyBrowser";

let RenderHeader : React.FC<{headerItem : HeaderItem[]}> = (props) => {
    let HeaderRef = React.useRef<HTMLDivElement>(null);
    let [HeaderVisible, setHeaderVisibility] = React.useState<boolean>(true);

    let headerLogo_Src = "https://i.ibb.co/CwNY3MH/Image-20230911125912.png";

    useEffect(
        () =>{
            let getImage = async() => 
            {
                // console.log("Attemping to retrieve image : " + props.src);
                let image_Promise : Promise<HTMLImageElement> = MyBrowser.getImage(headerLogo_Src);
                image_Promise.then
                ( 
                    (element) => 
                    {
                        console.log("Image Element retrieved")
                        MyBrowser.reload(); // reload page 
                        // setImageElement(element);
                        // if (props.isLoaded != undefined) props.isLoaded();
                    } 
                )
                .catch
                (
                    (err) => 
                    {
                        console.log("Error for Element retrival : " + err); 
                        // setImageElement(null);
                    }
                )
            }
            getImage();
        }
    )

    useLayoutEffect(
        () => { 
            let ConfigurePopup = (trigger : Event) => { 

                    if (HeaderRef.current != null)
                    {
                        const rect = HeaderRef.current.getBoundingClientRect();
                        const headerStart = rect.top + window.scrollY;
                        const headerEnd = rect.bottom + window.scrollY;
                        const scrollY = window.scrollY;
                        // HEADER NO LONGER VISIBLE
                        if (scrollY >= headerEnd)
                        {
                            console.log("header no longer visible");
                            setHeaderVisibility(false);
                        }else
                        {
                            console.log("Header is now visible");
                            setHeaderVisibility(true);
                        }
                    }
            }
            
            document.addEventListener("scroll", ConfigurePopup );
            return () => {
                document.removeEventListener("scroll",ConfigurePopup);
            }

        },[]
    )

    return (

        <>
            { /* WHERE HEADER NOT VISIBLE */ (!HeaderVisible) && <HeaderPopUp headerItems={props.headerItem}/> }

            <div ref = {HeaderRef} id = "header" className="header_Container">
                <div className="content_Container">
                    <div className="logoContainer">
                        <img className="LogoImage" src = {headerLogo_Src}/>
                    </div>
                    <div id = "divider"/>
                    <div className="navigation">
                        <HeadingContent HeaderElements = {props.headerItem} />

                    </div>
                </div>

            </div>
        </>

    )

}





export default RenderHeader;