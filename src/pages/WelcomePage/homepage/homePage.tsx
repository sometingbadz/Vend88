import React, { useEffect } from "react";


import FadeAnimation from '../../../Animations/PageFade';
import "./Styling.css";

import MainSection from "./mainSection"
import InstagramSection from './InstagramSection'
import ShapedVideo from '../../../components/CustomShapeVideo/ShapedVideo';


let RenerPage : React.FC<{}> = (props) => { 

    return (
        <>
            <FadeAnimation>
                <div style = {{ width:'100%',  marginTop:'100px'}}>
                    <MainSection />
                </div>     

                <ShapedVideo video="https://pospal.com.au/wp-content/uploads/2023/11/Untitled-video-Made-with-Clipchamp-4.mp4"  height={700} color="#fcfbfc" />
                <InstagramSection/>
            </FadeAnimation>

        </>
    )

}


export default RenerPage;