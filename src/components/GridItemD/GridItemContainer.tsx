import React, { useLayoutEffect } from "react";



import style from "./Styling.module.css";
import react from "react";

interface GridItems{
    name : string,
    description : string,
    price : string,
    imageUrl : string
}

let RenerPage : React.FC<{}> = (props) => { 
    let columnSize = 2; 

    let [itemHeight, setItemHeight] = react.useState(0);

    useLayoutEffect(
        () => {
            // reconfigure item sizing 
            let header = document.getElementById("header");
            if (header != null) setItemHeight( ( (window.innerHeight - header.clientHeight)/2) );
        }
    )

    const itemAction = (item: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const domElement = item.currentTarget; // Access the DOM element
        let findOutMoreElement = domElement.firstChild as HTMLDivElement;
        console.log(item.type);
        
        if (item.type == "mouseleave"){
            if (findOutMoreElement != null) findOutMoreElement.style.transform= "translate(100%,0)";
        }else if (item.type == "mouseenter")
            if (findOutMoreElement != null) findOutMoreElement.style.transform= "translate(0,0)";

        

      
        // You can also return the DOM element if needed
      
    }


    return (
        <>
            <div className= {style.container} style={{display:'grid', gridTemplateColumns : `repeat(${columnSize}, ${100/columnSize}%)`     }}>
                {
                    (() => {
                        const items = [];
                        for (let i = 0; i < 20; i++) {
                          items.push(
                            <div className={style.itemBlock} style = {{height:`${itemHeight}px`}}> 
                                <div onMouseLeave={itemAction} onMouseEnter={itemAction} className={style.items} key={i}>
                                    <div style = {{transform:'translate(100%,0)', transition : 'all 1s'}} className={style.viewMoreContainer}>
                                        FIND OUT MORE
                                    </div>
                                    <div style = {{ width:'100%', padding:'5%', boxSizing:'border-box', height:'100%', overflow:'hidden'}}>
                                        <img style ={{objectFit:'contain', height:'100%', width :'100%'}} src = "https://static.wixstatic.com/media/3d8e8d_3bf6435515f247ec8ab6e1597790fe11~mv2.png/v1/fill/w_356,h_356,al_c,q_85,enc_auto/3d8e8d_3bf6435515f247ec8ab6e1597790fe11~mv2.png"/>
                                    </div>
                                    <div style = {{width:'100%', height:'60%'}}>
                                        <div className = {style.itemName}>
                                                Name
                                        </div>

                                        <div>
                                            description
                                        </div>

                                    </div>
                                </div>
                            </div>
                          );
                        }
                        return items;
                      })()
                }
                
         
            </div>
        </>
    )

}


export default RenerPage;