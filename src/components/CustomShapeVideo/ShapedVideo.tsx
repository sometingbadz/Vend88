import { transform } from "typescript";




let RenderComponent : React.FC<{height : number, color : string, video : string }> = (props) => { 





    return (
        <>
        
            <div style = {{position:'relative', overflow:'hidden'}}>
                <div style ={{ position:'relative' ,display:'flex', justifyContent:'flex-end', top:'0', left :'0', zIndex:'5', transform:'translate(0,-1px)' }}>
                    <svg  style ={{margin:'0px', padding:'0px', bottom:'0px', }}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path style={{top:'100px', position:'absolute', transform:'translate(0, -40%)' }} fill={props.color} fill-rule="evenodd" d="M0,0H1440V320H0Z M1440,320L1392,304C1344,288,1248,256,1152,250.7C1056,245,960,267,864,250.7C768,235,672,181,576,165.3C480,149,384,171,288,197.3C192,224,96,256,48,272L0,288L0,320L48,320C96,320,192,320,288,320C384,320,480,320,576,320C672,320,768,320,864,320C960,320,1056,320,1152,320C1248,320,1344,320,1392,320Z"></path>
                   </svg>
                </div>
    

                <div className="video-container" style={{height:'100%', width:'100%',position:'absolute', top:'0', left :'0',zIndex:'0'}}>
                    <video  autoPlay muted loop style={{width:'100%', height:'100%', objectFit:'cover', mask : 'url("#custom-shape")' }}>
                        <source src={props.video} type="video/mp4" />
                    </video>
                </div>
                <div style = {{height:`${props.height}px`}}/>

                <div  style ={{ position:'relative' ,display:'flex', justifyContent:'flex-end', transform:'translate(0,1px)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill={props.color} fill-rule="evenodd" d="M0,320H1440V0H0Z M1440,0L1392,16C1344,32,1248,64,1152,69.3C1056,74,960,52,864,69.3C768,83,672,137,576,152.7C480,168,384,146,288,122.7C192,96,96,64,48,48L0,32L0,0L48,0C96,0,192,0,288,0C384,0,480,0,576,0C672,0,768,0,864,0C960,0,1056,0,1152,0C1248,0,1344,0,1392,0Z"></path>
                    </svg>
                </div>




            </div>
     



                {/* <div style ={{margin:'0px', width:'100%', height: '100vh', background:'black', color:'white', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <h1> BACKGROUND VIDEO </h1>
                </div>

                <div  style ={{ position:'relative' ,display:'flex', justifyContent:'flex-end'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fill-opacity="1" d="M0,96L80,112C160,128,320,160,480,144C640,128,800,64,960,37.3C1120,11,1280,21,1360,26.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>

                </div> */}
        </>
    )

}


export default RenderComponent;