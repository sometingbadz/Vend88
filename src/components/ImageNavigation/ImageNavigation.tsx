import { useState } from "react";
import { ObjectFlags } from "typescript";

let RenderPage : React.FC<{urls : string[] }> = (props) => { 
    let [selectedImage, setSelectedImage] = useState(0);

    return (
        <>
            <div style = {{width :'100%', height :'100%', position : 'relative', display:'block', whiteSpace:'nowrap' , overflow :'hidden' ,  }}>
                <div style = {{transform:`translate(-${selectedImage * 100}%,0%)`, width :'100%', height :"100%", transition:'all 1.5s'}}>
                    {
                        props.urls.map( (url : string) => { 
                            
                            return <>
                                  <div style = {{display:"inline-block", width :"100%", height :'100%'}}>
                                    <img style={{objectFit:'contain', width :'100%', height :'100%'}} src = {url}/>
                                </div>
                            </>
                        })
                    }
                </div>


                <div onMouseDown={() => { setSelectedImage( (props.urls.length-1 + (selectedImage)) % props.urls.length) }} style={{ cursor:'pointer',  position:'absolute', top :"80%", left : "0" }}>
                    <h1 > ← </h1>
                </div>

                <div onMouseDown={() => { setSelectedImage( (selectedImage+1) % props.urls.length) }} style={{cursor:'pointer',  position:'absolute', top :"80%", right : "0" }}>
                    <h1> → </h1>
                </div>
            </div>
        
        </>
    )
}


export default RenderPage;