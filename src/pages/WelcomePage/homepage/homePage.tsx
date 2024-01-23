import React, { useEffect } from "react";


import FadeAnimation from '../../../Animations/PageFade';
import "./Styling.css";

import MainSection from "./mainSection"
import InstagramSection from './InstagramSection'
import ShapedVideo from '../../../components/CustomShapeVideo/ShapedVideo';
import MyBrowser from "../../../Browser/MyBrowser"

let RenerPage : React.FC<{}> = (props) => { 

    return (
        <>
            <FadeAnimation>
                <div style = {{ width:'100%',  marginTop:`${MyBrowser.isMobile() ? 0 : 0}px` }}>
                    <MainSection />
                </div>     

            
                
                <ShapedVideo video="https://pospal.com.au/wp-content/uploads/2023/12/Untitled-video-Made-with-Clipchamp-5.mp4"  height={700} color="#fcfbfc" Heading="FRESHLY MADE"  />
                <InstagramSection/>
            </FadeAnimation>

        </>
    )

}


export default RenerPage;