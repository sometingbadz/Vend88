import React, { useEffect } from "react";


import FadeAnimation from '../../../Animations/PageFade';
import "./Styling.css";


import MainSection from "./mainSection"


let RenerPage : React.FC<{}> = (props) => { 

    return (
        <>
            <FadeAnimation>
                <div style = {{ width:'100%', minHeight :'101vh'}}>
                    <MainSection />
                
                </div>     
            </FadeAnimation>

        </>
    )

}


export default RenerPage;