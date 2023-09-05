
import React from "react";
import "./HeaderItem.css";




export interface HeaderItem { 
    name:string,
    url :string,
}

let Render : React.FC<{HeaderElements : HeaderItem[]}> = (props) => { 

    let containerSize = props.HeaderElements.length;


    return (
        <>
            <div className="container" style = {{ gridTemplateColumns : `repeat( ${containerSize}, ${100/containerSize}%)` }}> 
                {
                    props.HeaderElements.map( (item : HeaderItem) => {
                        return (
                                <div className = "items" > 
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