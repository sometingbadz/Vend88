import React, { useEffect, useLayoutEffect } from "react";
import "./styling.css";
import HeaderPopUp from "./HeaderPopUp";

import HeadingContent, {HeaderItem} from './HeadingContent';
import MyBrowser from "../../Browser/MyBrowser";
import PageURLS from "../../PageUris";

let RenderHeader : React.FC<{headerItem : HeaderItem[]}> = (props) => {
    let HeaderRef = React.useRef<HTMLDivElement>(null);
    let [HeaderVisible, setHeaderVisibility] = React.useState<boolean>(true);
    let [isMobile, set_IsMobile] = React.useState<boolean> (false);
    let [isMobileMenu, set_IsMobileMenu] = React.useState<boolean> (false);

    let headerLogo_Src = "https://i.ibb.co/CwNY3MH/Image-20230911125912.png";

    

    /** Load header image (logo) */
    useLayoutEffect(
        () =>{
            let getImage = async() => 
            {
                // console.log("Attemping to retrieve image : " + props.src);
                let image_Promise : Promise<HTMLImageElement> = MyBrowser.getImage(headerLogo_Src);
                image_Promise.then
                ( 
                    (element) =>  {MyBrowser.reload(); }                                     // reload page 
                )
                .catch
                (
                    (err) => { console.log("Error for Element Logo : " + err); }
                )
            }
            getImage();

            if (isMobileMenu) document.body.style.overflow = 'hidden';
            else document.body.style.overflow = 'visible';

        }
    );

    


    // Sub-header drive
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
                            setHeaderVisibility(false);
                        }else
                        {
                            setHeaderVisibility(true);
                        }
                    }
            }

            let configureView = (trigger ?:Event) => { 
                if ( MyBrowser.isMobile() ){
    
                    if (isMobile != true) set_IsMobile(true);
                }else{
                    set_IsMobile(false);
                }

            }
            configureView();
            window.addEventListener("resize", configureView);
            document.addEventListener("scroll", ConfigurePopup );
            return () => {
                document.removeEventListener("scroll",ConfigurePopup);
                window.addEventListener("resize", configureView);
            }

        },[]
    )

    useLayoutEffect(
        () => {
            // HANDLE MOBILE SCROLL HEADER EXPANSION
            let states : number[] = [0,0];
            let current :number = 0;
            let headerScrollHandler = (event : Event) => { 
                let navBarItemContainer = document.getElementById('navBarItemContainer') ;
                if( navBarItemContainer != undefined){
                    states[current] = window.scrollY;
                    let prevState = states[((current+1) % 2)];
                    if ((prevState > states[current] || window.scrollY < 200) && !( (window.scrollY + window.innerHeight) > document.body.scrollHeight-50  )  ){
                        navBarItemContainer.style.width = '90%';
                        navBarItemContainer.style.gridTemplateColumns = '20% 60% 20%';
                        navBarItemContainer.style.opacity = '100%';

                        navBarItemContainer.style.padding = '3%';
                    }else{
                        navBarItemContainer.style.width = 'auto';
                        navBarItemContainer.style.gridTemplateColumns = '0% 100% 0%';
                        navBarItemContainer.style.padding = '2%';
                        navBarItemContainer.style.opacity = '11%';

                    }
                    console.log(  document.body.scrollHeight            + " " + (window.scrollY + window.innerHeight)            );
                    current = ((current + 1) % 2);
                }
            };

            document.addEventListener("scroll", headerScrollHandler );
            return () => { 
                document.removeEventListener("scroll", headerScrollHandler);
            }
        },[]
    )



    return (

        <>
          
            {
                // MOBILE MENU
                isMobileMenu && 
                <div className="mobileMenuContainer">
                    <HeadingContent HeaderElements = {props.headerItem} ismobile ={false} set_IsmobileMenu={(isMenu :boolean) => { set_IsMobileMenu(isMenu) }} />
                 
                </div>
            }

            { /* WHERE HEADER NOT VISIBLE */ (!HeaderVisible) && <HeaderPopUp headerItems={props.headerItem}/> }
            {
                (
                    // DESKTOP HEADER

                    !isMobile && 
                    <div ref = {HeaderRef} id = "header" className="header_Container">
                        
                        <div className="content_Container">
                            <div className="logoContainer" onMouseDown={() => { MyBrowser.setPage(PageURLS.home)}}>
                                <img className="LogoImage" style = {{height:'5vw'}} src = {headerLogo_Src}/>
                            </div>
                            <div id = "divider"/>
                            <div className="navigation">
                                <HeadingContent HeaderElements = {props.headerItem} ismobile={true}/>
        
                            </div>
                        </div>
        
                    </div>
                ) || 
                (   
                    // MOBILE HEADER
                    <>
                        <div id = "header" className="navBarPhone" style = {{ paddingTop:'2%' }}>
                                <div id = 'navBarItemContainer'  className="navBarItemContainer" style = {{width:'90%'}}>
                                    <div onMouseDown={() => { MyBrowser.setPage(PageURLS.home)}} style = {{width:'100%', height:'20px', overflow:'hidden',}}>

                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  height="100%" viewBox="0,0,256,256">
                                        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                         stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                          font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                           style= {{mixBlendMode :'normal'}}><g transform="scale(5.12,5.12)"><path d="M25,1.05078c-0.2175,0 -0.43414,0.06898 -0.61914,0.20898l-23,17.95117c-0.43,0.34 -0.50992,0.9682 -0.16992,1.4082c0.34,0.43 0.9682,0.50992 1.4082,0.16992l1.38086,-1.07812v26.28906c0,0.55 0.45,1 1,1h14v-18h12v18h14c0.55,0 1,-0.45 1,-1v-26.28906l1.38086,1.07812c0.19,0.14 0.39914,0.21094 0.61914,0.21094c0.3,0 0.58906,-0.13086 0.78906,-0.38086c0.34,-0.44 0.26008,-1.0682 -0.16992,-1.4082l-23,-17.95117c-0.185,-0.14 -0.40164,-0.20898 -0.61914,-0.20898zM35,5v1.05078l6,4.67969v-5.73047z"></path></g></g>
                                        </svg>
                                    </div>
                                    <div style ={{width:'100%', textAlign:'center', fontWeight:'700'}}> VEND88 </div>
                                    <div style = {{width:'100%', height:'25px', textAlign:'right', overflow:'hidden'}} >
                                      
                                        {
                                            (isMobileMenu && 
                                                <svg onMouseDown={() => set_IsMobileMenu(false)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  height="100%" viewBox="0,0,256,256">
                                                <g fill="white" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                                stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                                style={{mixBlendMode: 'normal'}}><g transform="scale(5.12,5.12)"><path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"></path></g></g>
                                                </svg>
                                            ) || (
                                                <svg onMouseDown={() => set_IsMobileMenu(true)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="100%" viewBox="0,0,256,256">
                                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" 
                                                stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" 
                                                text-anchor="none" style={{mixBlendMode: 'normal'}}><g transform="scale(5.12,5.12)"><path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z"></path></g></g>
                                                </svg> 
                                            )
                                        }
                                    </div>
                                </div>

                        </div>
                        {/* <div id = "navBarPhone"> 
                                <div id ="nBarPhonecontent">
                                </div>
                                <label  className="bar"  onMouseDown={() => { set_IsMobileMenu(true)}}>
                                    <input id="check" type="checkbox"/>
                                    <span className="top"></span>
                                    <span className="middle"></span>
                                    <span className="bottom"></span>
                                </label>
                        </div>
                        <div className="content_Container" style={{gridTemplateColumns:'80% 20%'}}>


                                
                        <div style={{width:'100%'}}> 
                            <div className="logoContainer" onMouseDown={() => { MyBrowser.setPage(PageURLS.home)}}>
                                    <img className="LogoImage" src = {headerLogo_Src} style = {{height:'90px',}}/>
                                </div>
                        </div>
                        <div style={{width:'100%',  display:'flex', justifyContent:'center',alignContent:'center', alignItems:'center'}}>
                         
                            </div> 
                        </div> */}
                    </>

                )
            }
           
        </>

    )

}





export default RenderHeader;