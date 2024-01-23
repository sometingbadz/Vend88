import React, { ReactNode, useLayoutEffect } from "react";


import MyBrowser from "../../Browser/MyBrowser"
import style from "./Styling.module.css";
import react from "react";
import { tab } from "@testing-library/user-event/dist/tab";
import ImageNavigation from "../ImageNavigation/ImageNavigation"

export interface GridItems{
    name : string,
    mainDescription : ReactNode,
    tabs ? : { title : string , content : ReactNode}[],
    imageUrl : string[]
}


export interface SelectedItem_State{
    selected_Item : number,                     // selected item
    selected_Tab : number                   // sub category of selected item
}


// some item is clicked, we set state of item
let itemClick =() => {

}

let RenerPage : React.FC<{Elements : GridItems[], selectedItemState ?: SelectedItem_State}> = (props) => { 
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
      
    }

    let [SelectedItem, setSelectedItem] = react.useState((props.selectedItemState == undefined || props.selectedItemState.selected_Item >= props.Elements.length) ? -1 : props.selectedItemState.selected_Item);
    let [selectedTab, setSelectedTab] = react.useState( (props.selectedItemState != undefined) ?  props.selectedItemState?.selected_Tab : -1);  // We denote -1 = main tab, 0 = first tab, ... 
    useLayoutEffect(
        () => { 
            if (SelectedItem === undefined){

            }
        }
    )

    return (
        <>
            {
                // SELECTED ITEM OVERLAY
                (SelectedItem !=-1) && 
                <div onMouseDown={ (event) => {setSelectedItem(-1);}} className={style.ItemoverlayContainer}>
                    <div onMouseDown={(event) => {event.stopPropagation();}} className={style.itemOverlay}
                        style={{gridTemplateColumns: `${selectedTab === -1 ? "50% 50%" : "0% 100%"}`}}>
                        <div style = {{width:"100%", height :"100%",  padding:'5%', boxSizing:'border-box', overflow:'hidden'}}> 

                            
                            {

                                props.Elements[SelectedItem].imageUrl.length <= 1 &&
                                <img style ={{alignSelf:'start', objectFit:'contain', background:"rgba(0,0,0,0.1)",
                                border :'solid 1px black',  height:'100%', width :'100%'}} src =  
                                { props.Elements[SelectedItem].imageUrl[0] == "" ? "https://i.ibb.co/C6pcK0x/comingsoon.png"  : 
                                props.Elements[SelectedItem].imageUrl[0] }/>
                                || // RENDER MULTIPLE IMAGE
                                <div style = {{width:'100%',height:'100%'}}>   
                                        {   
                                            <ImageNavigation urls={props.Elements[SelectedItem].imageUrl}/>
                                        }
                                </div>


                            }
                        </div>
                        <div style = {{width:'100%', height :'100%', padding :'5%', boxSizing:'border-box', overflow:'auto',}}>
                            <div className={style.TabContainer}>
                                <h1 style = {{padding:'0px', margin:'0px'}}>{props.Elements[SelectedItem].name} </h1>
                                <div className={style.Tabs}>
                                    <span className={style.TabButton} onMouseDown={() => {setSelectedTab(-1)}}> Main </span>
                                    {
                                        (
                                            // RENDER TABS
                                            () => { 
                                                let tabItems : ReactNode[] = [];
                                                if (props.Elements[SelectedItem] != undefined ){
                                                    if (props.Elements[SelectedItem].tabs != undefined){
                                                        for (let i =0; i < props.Elements[SelectedItem].tabs!.length; i++){
                                                            let element = <span className={style.TabButton} onMouseDown={() => {setSelectedTab(i)}}> | {props.Elements[SelectedItem].tabs![i].title} </span>
                                                            tabItems.push(element);
                                                        }
                                                    }
                                                }
                                                return tabItems;
                                            }

                                        )()
                                    }

                                </div>
                            </div>
                          
                            {
                                (

                                    // HANDLE TAB CONTENTS
                                    () => { 
                                        if (props.Elements[SelectedItem] != undefined && props.Elements[SelectedItem].tabs !== undefined ){

                                            // Verify tab is valid.
                                            if ( selectedTab < props.Elements[SelectedItem]!.tabs!.length && selectedTab >= 0 ){
                                                return props.Elements[SelectedItem]!.tabs![selectedTab].content;
                                            }                                             
                                        }
                                        return props.Elements[SelectedItem].mainDescription;
                                    }
                                )()

                            }
                        </div>
                    </div>
                   
                </div>
            }
        {/* repeat(${columnSize}, ${100/columnSize}%)`     */}
            <div className= {style.container} style={{display:'grid', gridTemplateColumns : `${MyBrowser.isMobile() ? "100%" :`repeat(${columnSize}, ${100/columnSize}%)`}`  }}>
                {
                    (() => {
                        const items = [];
                        for (let i = 0; i < props.Elements.length; i++) {
                          items.push(
                            <div className={style.itemBlock} style = {{minHeight:`${itemHeight}px`, height:'400px'}}> 
                                <div onMouseDown={ () => {setSelectedItem(i)}} onMouseLeave={itemAction} onMouseEnter={itemAction} className={style.items} key={i}>
                                    
                                    <div style = {{fontSize :'15px', transform:'translate(100%,0)', transition : 'all 1s'}} className={style.viewMoreContainer}>
                                        Read more
                                    </div>
                                    <div style = {{ width:'90%', padding:'0%', boxSizing:'border-box', height:'100%', overflow:'hidden'}}>
                                        <img style ={{objectFit:'contain', height:'100%', width :'100%', padding:'10%', boxSizing:'border-box'}} 
                                    
                                            src =  { props.Elements[i].imageUrl.length === 0 || props.Elements[i].imageUrl[0] === "" ? "https://i.ibb.co/C6pcK0x/comingsoon.png"  : props.Elements[i].imageUrl[0] }
                                        />
                                    </div>
                                    <div className={style.itemDescriptionContainer}  style = {{width:'100%',  overflow:'hidden'}}>
                                        <div className = {style.itemName}>
                                                {props.Elements[i].name}
                                        </div>
                                    
                                        <div className= {style.itemDescription} style = {{ boxSizing:'border-box' }} >
                                                {props.Elements[i].mainDescription}
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