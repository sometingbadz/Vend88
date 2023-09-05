import React from "react";



import "./Styling.css";


let renerPage : React.FC<{}> = (props) => { 



    return (
        <>
            <div style = {{ background : '#ffcf00', width:'100vw', height :'100vh', display:'flex', flexDirection:'column',  justifyContent:'center', alignItems:'center'}}>
                <div className="imageContainer">
                    <img style = {{width:"100%", height : '100%', objectFit:'contain'}} src = "https://i.ibb.co/Y7bX1dJ/360-F-353839266-8yqh-N0548c-Gxrl4-VOxngsi-Jz-Dgr-DHxj-G.jpg"/> 
                </div>
                {/* <h1> WELCOME </h1> */}
            </div>
        </>
    )

}


export default renerPage;