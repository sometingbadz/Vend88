import React, { useEffect } from "react";


import FadeAnimation from '../../../Animations/PageFade';
import "./Styling.css";

import MainSection from "./mainSection"
import InstagramSection from './InstagramSection'

let RenerPage : React.FC<{}> = (props) => { 

    return (
        <>
            <FadeAnimation>
                <div style = {{ width:'100%',  marginTop:'100px'}}>
                    <MainSection />
                </div>     

                <div style ={{ position:'relative' ,display:'flex', justifyContent:'flex-end'}}>
                    <svg  style ={{color:'black',  margin:'0px', padding:'0px', bottom:'0px'}}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="black"  fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>

                </div>


                <div style ={{margin:'0px', width:'100%', height: '100vh', background:'black', color:'white', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <h1> BACKGROUND VIDEO </h1>
                </div>

                <div style ={{ position:'relative' ,display:'flex', justifyContent:'flex-end'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fill-opacity="1" d="M0,96L80,112C160,128,320,160,480,144C640,128,800,64,960,37.3C1120,11,1280,21,1360,26.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>

                </div>
                <InstagramSection/>
            </FadeAnimation>

        </>
    )

}


export default RenerPage;