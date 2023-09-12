import React from "react";



import "./Styling.css";


let renerPage : React.FC<{}> = (props) => { 



    return (
        <>
            <div style = {{ background : '#ffcf00', width:'100vw', height :'102vh', display:'flex', flexDirection:'column',  justifyContent:'center', alignItems:'center'}}>
                <div className="imageContainer">
                    <img style = {{width:"100%", height : '100%', objectFit:'contain'}} src = "https://svgur.com/i/xWv.svg"/> 
                </div>
                {/* <h1> WELCOME </h1> */}
            </div>
        </>
    )

}


export default renerPage;