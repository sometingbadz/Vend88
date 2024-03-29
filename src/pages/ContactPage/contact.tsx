import React, { useEffect } from "react";


import FadeAnimation from '../../Animations/PageFade';
import "./Styling.css";
import { isJSDocUnknownTag } from "typescript";
import {useLayoutEffect} from "react";

let RenerPage : React.FC<{}> = (props) => { 
    let region="na1",portalId="20673809", formId='620ed72a-1f29-4933-9393-ee0c94cfdd74'

    useLayoutEffect(() => {
        console.log("Creating script");
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/shell.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @ts-ignore
            if (window.hbspt) {
                console.log("creating");
                // @ts-ignore
                window.hbspt.forms.create({
                    region: region,
                    portalId: portalId,
                    formId: formId,
                    target: '#hubspotForm'
                })
            }
        });
    }, []);



    return (


            // <div>
            //     <div id="hubspotForm"></div>
            // </div>
        
        <FadeAnimation>

            <div style = {{ width:'100%', minHeight :'101vh', display:'flex', flexDirection:'column',  background :'#f2f2f2'}}>
                <div style = {{width:'100%' , display:'grid', justifyContent :'center' , marginTop:'50px', marginBottom :'40px', textAlign:'center', wordBreak :'break-all'}}>
                    <h1> LETS CONNECT </h1>
                
                </div>



                <div style = {{width:'100%', display :'flex', alignItems:'center', flexDirection :'column'}}>
                    <div id = 'contactusInfo'>
                        <div className  = 'contactUsContainer'>
                            <img  src = "https://www.svgrepo.com/show/532544/location-pin-alt.svg"></img>
                            <h1>
                                OUR MAIN OFFICE
                            </h1> 
                            <p>
                                <a href="https://www.google.com/maps?ll=-33.839386,151.034718&z=16&t=m&hl=en&gl=AU&mapclient=embed&q=10/191+Parramatta+Rd+Auburn+NSW+2144">   
                                10/191 Parramatta Road Auburn NSW 2144 </a>
                            </p>
                        
                        </div>
                       

                        <div className  = 'contactUsContainer'>
                            <img src = "https://www.svgrepo.com/show/304555/phone-number.svg"></img>
                            <h1>
                                Phone Number
                            </h1> 
                            <p >  

                            <a style ={{padding:'0', margin:'0'}} href="tel:1300290600">1300 290 600</a>

                            </p>
                        </div>
                       


                        <div className  = 'contactUsContainer'>
                            <img src = "https://www.svgrepo.com/show/502648/email.svg"></img>
                            <h1>
                                Email
                            </h1> 
                         
                            <p>
                                <a href =  "mailto: purchasing@pospal.com.au"> purchasing@pospal.com.au 
                                
                                </a> 
                            </p>
                        </div>
                       
                        <div className  = 'contactUsContainer'>
                            <img src = "https://www.svgrepo.com/show/521711/instagram.svg"></img>
                            <h1>
                                Instagram
                            </h1> 
                            <a  href="https://www.instagram.com/vend_88" target="blank"> <p> @vend_88 </p></a>
                        </div>
                        <div className  = 'contactUsContainer'>
                            <img src = "https://www.svgrepo.com/show/521654/facebook.svg"></img>
                            <h1>
                                Facebook
                            </h1> 
                            <a  href="https://www.facebook.com/profile.php?id=61555314277920" target="blank"> <p> vend_88 </p></a>
                        </div>
                    </div>
                    <div id = "section2Info"> 
                        <div className = "section2Container" style = {{textAlign:'center'}}>

                            <h1>
                                FORM
                            </h1> 
                             <div className="formcontainer" >
                                 <div id="hubspotForm"></div>
                            </div>
                        </div>

                        <div className = "section2Container" style = {{textAlign:'center'}}>

                            <h1>
                                FIND US HERE
                            </h1> 
                            <div style = {{width :'70%', overflow :'hidden'}}>

                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.95055388839!2d151.03214327618505!3d-33.839385773237844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a34e08855555%3A0x8ee65a44b74a64c!2s10%2F191%20Parramatta%20Rd%2C%20Auburn%20NSW%202144!5e0!3m2!1sen!2sau!4v1697603414651!5m2!1sen!2sau" 
                                width="600" height="450" style={{border:'0'}}  loading="lazy"></iframe>

                            </div>
                        </div>

                    </div>
                </div>
                


            </div>
        </FadeAnimation>
    );

}


export default RenerPage;