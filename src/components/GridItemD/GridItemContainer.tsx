import React, { useLayoutEffect } from "react";



import style from "./Styling.module.css";
import react from "react";

export interface GridItems{
    name : string,
    description : string,
    imageUrl : string
}



// some item is clicked, we set state of item
let itemClick =() => {

}

let RenerPage : React.FC<{Elements : GridItems[]}> = (props) => { 
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

    let [SelectedItem, setSelectedItem] = react.useState(-1);


    return (
        <>

            {
                (SelectedItem !=-1) && 
                <div onMouseDown={ (event) => {setSelectedItem(-1);}} className={style.ItemoverlayContainer}>
                    <div onMouseDown={(event) => {event.stopPropagation();}} className={style.itemOverlay}>
                        <div style = {{width:"100%", height :"100%", background:'white', padding:'9%', boxSizing:'border-box'}}> 
                            <img style ={{alignSelf:'start', objectFit:'contain', background:"rgba(0,0,0,0.1)", border :'solid 1px black',  height:'100%', width :'100%'}} src =  { props.Elements[SelectedItem].imageUrl == "" ? "https://i.ibb.co/C6pcK0x/comingsoon.png"  : props.Elements[SelectedItem].imageUrl }/>
                        </div>
                        <div style = {{padding :'5%', boxSizing:'border-box',}}>
                            <h1>  {props.Elements[SelectedItem].name} </h1>
                            <h3> {props.Elements[SelectedItem].description}</h3>
                        </div>

                    </div>
                </div>
            }
        
            <div className= {style.container} style={{display:'grid', gridTemplateColumns : `repeat(${columnSize}, ${100/columnSize}%)`     }}>
                {
                    (() => {
                        const items = [];
                        for (let i = 0; i < props.Elements.length; i++) {
                          items.push(
                            <div className={style.itemBlock} style = {{minHeight:`${itemHeight}px`, height:'400px'}}> 
                                <div onMouseDown={ () => {setSelectedItem(i)}} onMouseLeave={itemAction} onMouseEnter={itemAction} className={style.items} key={i}>
                                    <div style = {{fontSize :'15px', transform:'translate(100%,0)', transition : 'all 1s'}} className={style.viewMoreContainer}>
                                        FIND OUT MORE
                                    </div>
                                    <div style = {{ width:'100%', padding:'5%', boxSizing:'border-box', height:'100%', overflow:'hidden'}}>
                                        <img style ={{objectFit:'contain', height:'100%', width :'100%', padding:'10%', boxSizing:'border-box'}} 
                                            src =  { props.Elements[i].imageUrl == "" ? "https://i.ibb.co/C6pcK0x/comingsoon.png"  : props.Elements[i].imageUrl }
                                        />
                                    </div>
                                    <div className={style.itemDescriptionContainer}  style = {{width:'100%',  overflow:'hidden'}}>
                                        <div className = {style.itemName}>
                                                {props.Elements[i].name}
                                        </div>
                                        <div className= {style.itemDescription} >
                                                {props.Elements[i].description}
                                        </div>

                                        {/* {(props.Elements[i].imageUrl == "") {"sd"} : {props.Elements[i].imageUrl} } */}
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