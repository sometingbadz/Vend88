import React, { useEffect } from "react";


import FadeAnimation from '../../Animations/PageFade';
import "./Styling.css";
import { isJSDocUnknownTag } from "typescript";

let RenerPage : React.FC<{}> = (props) => { 

    return (
        <FadeAnimation>
            <div style = {{ width:'100%', minHeight :'101vh', display:'flex', flexDirection:'column',  background :'#f2f2f2', textAlign:'center'}}>
                <h1 style = {{marginTop:'90px'}}>
                     ABOUT US
                    
                </h1> 

            </div>
        </FadeAnimation>
    );

}


export default RenerPage;