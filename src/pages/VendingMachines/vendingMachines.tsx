import React, { useLayoutEffect } from "react";
import FadeAnimation from '../../Animations/PageFade';
import MyBrowser from '../../Browser/MyBrowser';


import "./Styling.css";
import GridItemContainer, {GridItems, SelectedItem_State} from '../../components/GridItemD/GridItemContainer';

let RenerPage : React.FC<{}> = (props) => { 

    let GridItem : GridItems[] = [
        {
            name : "Harajuku",
            mainDescription : 
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
            mainDescription : <>
                <p>Introducing the Hokkaido Farm Fresh Ice Cream Machine – Where Milk Meets Magic in Hokkaido!</p>
                Nestled in the pristine, natural beauty of Hokkaido, where rugged landscapes, volcanic wonders
                and ski paradises captivate the soul, the Hokkaido Farm Fresh Ice Cream Machine stands as a delightful
                homage to this northernmost gem of Japan. Hokkaido is renowned for itslush farmlands and the quality of 
                its dairy products, ensuring that every scoop of ice cream is a taste of Hokkaido's pristine, farm-fresh goodness.
            </>,
            tabs : [{
                title :"Poem",
                content : 
                    <>
                        {/* <h1 style="font-size: 1.5em; text-decoration: underline;">NARMONSEA Sep 2016</h1> */}
                        <div style = {{width:'100%', textAlign:'center'}}>
                            <p>Take me back to Hokkaido</p>
                            <p>The streets encased in white,</p>
                            <p>The crumbling beneath our feet</p>
                            <p>As we traverse this region</p>
                            <p>Seeking peace, found in all directions.</p>

                            <p>Take me back to Hakodate:</p>
                            <p>A particular bliss can be found,</p>
                            <p>In the healthy spring,</p>
                            <p>Whilst we wander naked in the snow,</p>
                            <p>Bathing in the deepest of seas.</p>

                            <p>Take me back to Sapporo:</p>
                            <p>A quiet, yet bustling city,</p>
                            <p>Touches of silence paired with serenity,</p>
                            <p>Glimpses of modern paired with old,</p>
                            <p>Giving us the chance to find ourselves again.</p>

                            <p>Take me back there with you:*</p>
                            <p>Eyes looking forward into the distance.</p>
                            <p>Our selfishness brings us together,</p>
                            <p>Yet our selfishness will tear us apart.</p>
                            <p>Yet we still adore each other.</p>
                            <p>I just want to see snow again.</p>

                            <p style={{color : '#008080'}}>#you #me #snow #us #japan #hokkaido</p>
                        </div>

                    </>
            }],
            imageUrl : "https://i.ibb.co/0mTg8TR/machine2.png"
        },
        {
            name : "Vending 3",
            mainDescription : "this is vending 3",
            imageUrl : ""
        },
        {
            name : "Vending 4",
            mainDescription : "this is vending 4",
            imageUrl : ""
        },
        {
            name : "Vending 5",
            mainDescription : "this is vending 5",
            imageUrl : ""
        },
        {
            name : "Vending 6",
            mainDescription : "this is vending 6",
            imageUrl : ""
        },
        {
            name : "Vending 7",
            mainDescription : "this is vending 7",
            imageUrl : ""
        }
    ]

    let Path = MyBrowser.getCurrentPath();
    let selectedItemState = {
        selected_Item : -1,                     // no selected item
        selected_Tab : -1                   // no selected sub category
    };


    if (Path != undefined && !isNaN(parseFloat(Path[1]))) {        
        selectedItemState.selected_Item = parseInt(Path[1], 10);
        if (!isNaN(parseInt(Path[2], 10))) selectedItemState.selected_Tab =  parseInt(Path[2], 10);


        console.log("Selected item : " + selectedItemState.selected_Item + " of sub category number : " + selectedItemState.selected_Tab);
    }

    return (
        <>
            <FadeAnimation>
                <GridItemContainer Elements={GridItem} selectedItemState={selectedItemState}/>
            </FadeAnimation>
        </>
    )

}




export default RenerPage;