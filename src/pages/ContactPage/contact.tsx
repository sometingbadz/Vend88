import React, { useEffect } from "react";


import FadeAnimation from '../../Animations/PageFade';


let RenerPage : React.FC<{}> = (props) => { 

    return (
        <FadeAnimation>
            <div style = {{ width:'100%', height :'101vh', display:'flex', flexDirection:'column',  justifyContent:'center', alignItems:'center'}}>
                <h1> CONTACT PAGE </h1>
            </div>
        </FadeAnimation>
    );

}


export default RenerPage;