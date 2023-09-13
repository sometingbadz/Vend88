import React, { useEffect } from "react";


import FadeAnimation from '../../../Animations/PageFade';
import "./Styling.css";


let RenerPage : React.FC<{}> = (props) => { 

    return (
        <>
            <FadeAnimation>
                <div style = {{ width:'100%', height :'101vh', display:'flex', flexDirection:'column',  justifyContent:'center', alignItems:'center'}}>
                    <h1> HOME PAGE </h1>
                </div>     
            </FadeAnimation>

        </>
    )

}


export default RenerPage;