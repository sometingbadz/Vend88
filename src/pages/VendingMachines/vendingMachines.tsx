import React, { useLayoutEffect } from "react";
import FadeAnimation from '../../Animations/PageFade';
import MyBrowser from '../../Browser/MyBrowser';


import "./Styling.css";
import GridItemContainer, {GridItems} from '../../components/GridItemD/GridItemContainer';

let RenerPage : React.FC<{}> = (props) => { 

    let GridItem : GridItems[] = [
        {
            name : "Harajuku",
            description : 
                <>
                    <p>Introducing the Harajuku Ice Cream Machine – A Sweet Delight for the Heart of Harajuku!</p>
                
                    In the heart of Harajuku, where vibrant street art, eclectic fashion, and youthful energy collide, the 
                    Harajuku Ice Cream Machine stands as a delicious testament to this unique cultural melting pot. Inspired by
                    vibrant colors and the boundless creativity that defines Harajuku, this ice cream machine is a must-visit for locals and tourists alike.
                </>,


            imageUrl : "https://i.ibb.co/D4YKW03/itemsadf.png"
        },
        {
            name : "Hokkaido",
            description : <>
                <p>Introducing the Hokkaido Farm Fresh Ice Cream Machine – Where Milk Meets Magic in Hokkaido!</p>
                Nestled in the pristine, natural beauty of Hokkaido, where rugged landscapes, volcanic wonders
                and ski paradises captivate the soul, the Hokkaido Farm Fresh Ice Cream Machine stands as a delightful
                homage to this northernmost gem of Japan. Hokkaido is renowned for itslush farmlands and the quality of 
                its dairy products, ensuring that every scoop of ice cream is a taste of Hokkaido's pristine, farm-fresh goodness.
            </>,
            imageUrl : "https://i.ibb.co/0mTg8TR/machine2.png"
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

    let Path = MyBrowser.getCurrentPath();
    let selectedItem = -1;
    if (Path != undefined && !isNaN(parseFloat(Path[1]))) selectedItem = parseInt(Path[1], 10);
    
    return (
        <>
            <FadeAnimation>
                <GridItemContainer Elements={GridItem} selectedItem={selectedItem}/>
            </FadeAnimation>
        </>
    )

}




export default RenerPage;