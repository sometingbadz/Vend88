
import React from "react";
import "./HeaderItem.css";


import MyBrowser from '../../Browser/MyBrowser'; 
import { transform } from "typescript";

export interface HeaderItem { 
    name:string,
    url :string,
}

let itemClick = (Item : HeaderItem) =>{
    MyBrowser.setPage(Item.url);
}

const itemHover: React.MouseEventHandler<HTMLDivElement> = (event) => {
    // Your hover event handling code here
    let target = event.currentTarget;
    // console.log(target.innerHTML);
    let k = target.firstElementChild as HTMLDivElement | undefined;

    if (k != null) {
        console.log(k.innerHTML);
        k.style.display = "block";
    }

 };
 const itemLeave: React.MouseEventHandler<HTMLDivElement> = (event) => {
    // Your hover event handling code here
    let target = event.currentTarget;
    let k = target.firstElementChild as HTMLDivElement | undefined;

    if (k != null) {
        console.log(k.innerHTML);
        k.style.display= "none";
    }

 };

let Render : React.FC<{HeaderElements : HeaderItem[]}> = (props) => {
    let containerSize = props.HeaderElements.length;

    return (
        <>
            <div className="container" style = {{ position:'relative', gridTemplateColumns : `repeat( ${containerSize}, ${100/containerSize}%)` }}> 
                {
                    props.HeaderElements.map( (item : HeaderItem) => {
                        return (
                            // <div style = {{ background:'green'}}>

                            //         kkk
                            // </div>
                            <>
                                <div onMouseEnter={itemHover} onMouseLeave={itemLeave} onMouseDown={() =>{itemClick(item)}} className = "items" 
                                style = {{color: `${MyBrowser.getPage() == item.url ? "orange" : "grey"} `}}> 
                                   {item.name}
                                    <div style = {{   background:'white', zIndex:'5',width :'100px', boxSizing:'border-box',
                                    position:'absolute',  color:'white', transform:'translate(0%, 10px)', display:'none'}}>
                                        <div style = {{border:"1px solid black",  marginTop:'20px', color :'black'}}>
                                                ABC
                                        </div>

                                        <div style = {{border:"1px solid black",  marginTop:'5px', color :'black'}}>
                                        ABC
                                        </div>
                                    </div>

                                    
                                    
                                </div>
                            
                            </>
                        )
                    })
                }

            </div>
        </>
    );
}


export default Render;