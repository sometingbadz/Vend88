
import React from "react";
import "./HeaderItem.css";


import MyBrowser from '../../Browser/MyBrowser'; 
import { transform } from "typescript";



// subheader items
export interface SubItems{
    items : HeaderItem[];
}

export interface HeaderItem { 
    name:string,
    url :string,
    subitems ?: SubItems;
}

let itemClick = (Item : HeaderItem | undefined) =>{
    if (Item != undefined){
        console.log("Navigating to url : " + Item.url);
        MyBrowser.setPage(Item.url);
    }
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



let Render : React.FC<{HeaderElements : HeaderItem[], ismobile:boolean, set_IsmobileMenu ?: (isMobileMenu : boolean)=> void}> = (props) => {
    let containerSize = props.HeaderElements.length;
    console.log("aa" + props.HeaderElements.at(0)?.subitems?.items.at(0));

    return (
        <>

            {
                // DESKTOP MENU
                (
                    props.ismobile && 
                    <div className="container" style = {{ position:'relative', gridTemplateColumns : `repeat( ${containerSize}, ${100/containerSize}%)` }}> 
                        {
                            props.HeaderElements.map( (item : HeaderItem) => {
                                
                                let subitems = []; // sub heaader pages
                                if (item.subitems != undefined) {
                                    let current : SubItems = item.subitems;
                                    
                                    for (let i=0; i < current.items.length; i++) {
                                        let currentSubItem = current.items.at(i);
                                            subitems.push ( <div onMouseDown={(e) => { e.stopPropagation(); itemClick(currentSubItem)}} className = "subitem" style = {{zIndex:'1', border:"1px solid black",  color :'black', marginTop:'2px'}}> {currentSubItem?.name} </div> );
                                    }
                                }

                                return (
                                    <>
                                        <div onMouseEnter={itemHover} onMouseLeave={itemLeave} onMouseDown={() =>{itemClick(item)}} className = "items" 
                                        style = {{color: `${MyBrowser.getPage() == item.url ? "orange" : "grey"} ` }}> 
                                        {item.name}

                                            <div style = {{zIndex:'5',width :'130px', boxSizing:'border-box',
                                            position:'absolute',  color:'white', display:'none'}}>
                                                <div style = {{marginTop :'25px'}}/>
                                                {subitems}
                                            </div>
                                        </div>
                                    
                                    </>
                                )
                            })
                        }
                    </div>

                )
                ||
                (
                    // MOBILE MENU
                    <>  
                        <div style = {{position :'relative', width : '100%',  display :'flex', justifyContent:'center', alignContent:'center', flexDirection:'column'}}>
                    
                        {
                            props.HeaderElements.map( (item : HeaderItem) => {
                                
                                return (
                                    <>
                                        <div onMouseDown={() =>{itemClick(item); if (props.set_IsmobileMenu != undefined) props.set_IsmobileMenu(false) }}  
                                        style = {{textAlign:'center', color: `${MyBrowser.getPage() == item.url ? "orange" : "grey"} `  }}> 
                                            <h3 style  ={{margin:'5px', color :'white'}}> 
                                                {item.name}
                                            </h3>
                                        </div>
                                    </>
                                )
                            })
                        }
                        </div>
                    </>
                )
            }

        </>
    );
}


export default Render;