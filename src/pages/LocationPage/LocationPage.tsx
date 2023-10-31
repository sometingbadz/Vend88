import React, { ReactNode, useEffect } from "react";
import FadeAnimation from '../../Animations/PageFade';
import MyBrowser from '../../Browser/MyBrowser';
import pageUrls from '../../PageUris';

interface locations {
    name : string,
    locationPicture : string,
    description : ReactNode;

}

let RenerPage : React.FC<{}> = (props) => { 

    
    let l1 : locations[]= [
        {
    
            name : "sdaf",
            locationPicture : "https://bothub.com.au/wp-content/uploads/2023/03/Image_20230315153648-scaled.jpg",
            description : 
                <>
                    <div style ={{width:"100%"}}>
                        <h3 style = {{margin:'0'}}> Parramatta Venue </h3>
                        <p style = {{marginTop:'25px'}}> <span style = {{textDecoration:'underline'}}> Address : </span>  Unit 10, 191 Parramatta Road, Auburn, NSW 2144 </p>
                        <p style = {{marginTop:'0px'}}> 
                            <span style = {{textDecoration:'underline'}}>Available Vends : </span> 
                            
                            <span onMouseDown={() => {MyBrowser.setPage(pageUrls.vending + "/0")}} style = {{cursor:'pointer'}} >Harajuku </span>   
                            <span onMouseDown={() => {MyBrowser.setPage(pageUrls.vending + "/1")}}  style = {{cursor:'pointer'}}>, Hokkaido </span>  
                        </p>

                    </div>
                </>
        }
        
    ]
    

    return (
        <FadeAnimation>
            <div style = {{ width:'100%', display:'flex', flexDirection:'column',  justifyContent:'center', alignItems:'center'}}>
                

                <h1 style={{marginTop:'100px', marginBottom:'50px'}}>  OUR LOCATIONS  </h1>



                <div style = {{width:'80%',display :'grid', gridTemplateColumns : "40% 60%"}}>
                    <div style ={{width:'100%', display :'flex' , flexDirection :'column', padding :'5px', boxSizing:'border-box'}}>
                        
                        <div style = {{width:'100%',  height:'100%'}}>
                        {/* props.HeaderElements.map( (item : HeaderItem) => { */}

                                {
                                    l1.map((item : locations)  => {
                                        return (
                                            <> 
                                                <div style = {{width:'100%', display :'grid', gridTemplateColumns:'30% 70%'}}> 
                                                    <div style ={{width:'100%', display:'flex',  background:'purple'}}>
                                                        <img src = {item.locationPicture}
                                                        style = {{width:'100%', objectFit :'cover'}}>
                                                            
                                                        </img>
                                                    </div>
                                                    <div style ={{width:'100%', wordBreak:'break-all' , border : '1px solid black',  padding :'5%' ,boxSizing:'border-box'}}>
                                                        {item.description}
                                                    </div>
                                                    

                                                </div>
                                            
                                            </>
                                        )

                                    } )
                                }





                        </div>
                    </div>



                    <div style = {{ width:'100%', height :"50vh", paddingLeft:'10px', boxSizing:'border-box', overflow:"hidden"}}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.95055388839!2d151.03214327618505!3d-33.839385773237844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a34e08855555%3A0x8ee65a44b74a64c!2s10%2F191%20Parramatta%20Rd%2C%20Auburn%20NSW%202144!5e0!3m2!1sen!2sau!4v1697603414651!5m2!1sen!2sau" 
                                width="100%" height="100%" style={{border:'0'}}  loading="lazy"></iframe>
                    </div>


                </div>
            </div>


        </FadeAnimation>
    )

}


export default RenerPage;