
import React from "react";
import "./HeaderItem.css";


import MyBrowser from '../../Browser/MyBrowser'; 

export interface HeaderItem { 
    name:string,
    url :string,
}

let itemClick = (Item : HeaderItem) =>{
    MyBrowser.setPage(Item.url);
}

let Render : React.FC<{HeaderElements : HeaderItem[]}> = (props) => {
    let containerSize = props.HeaderElements.length;

    return (
        <>
            <div className="container" style = {{ gridTemplateColumns : `repeat( ${containerSize}, ${100/containerSize}%)` }}> 
                {
                    props.HeaderElements.map( (item : HeaderItem) => {
                        return (
                                <div onMouseDown={() =>{itemClick(item)}} className = "items" style = {{color: `${MyBrowser.getPage() == item.url ? "orange" : "grey"} `}}> 
                                   {item.name}
                                </div>
                        )
                    })
                }

            </div>
        </>
    );
}


export default Render;