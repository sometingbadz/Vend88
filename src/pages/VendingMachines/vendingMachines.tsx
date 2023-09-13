import React, { useLayoutEffect } from "react";
import FadeAnimation from '../../Animations/PageFade';



import "./Styling.css";
import GridItemContainer, {GridItems} from '../../components/GridItemD/GridItemContainer';

let RenerPage : React.FC<{}> = (props) => { 

    let GridItem : GridItems[] = [
        {
            name : "Vending 1",
            description : "this is vending 1",
            imageUrl : ""
        },
        {
            name : "Vending 2",
            description : "this is vending 2",
            imageUrl : ""
        },
        {
            name : "Vending 3",
            description : "this is vending 3",
            imageUrl : ""
        },
        {
            name : "Vending 4",
            description : "this is vending 4",
            imageUrl : ""
        },
        {
            name : "Vending 5",
            description : "this is vending 5",
            imageUrl : ""
        },
        {
            name : "Vending 6",
            description : "this is vending 6",
            imageUrl : ""
        },
        {
            name : "Vending 7",
            description : "this is vending 7",
            imageUrl : ""
        }
    ]
    return (
        <>
            <FadeAnimation>
                <GridItemContainer Elements={GridItem} />


            </FadeAnimation>
        </>
    )

}


export default RenerPage;