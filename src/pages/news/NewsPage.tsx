import React, { useEffect } from "react";
import News, {NewsItem} from "./news";


let RenerPage : React.FC<{}> = (props) => { 
    let NewsList : NewsItem[] = 
        [
            {
                Title : "Introducing the Harajuku Ice Cream Machine!",
                Date : "29/11/2023",
                Description : 
                    "Greetings, dessert enthusiasts and culture seekers!" +
                    "Today, we're thrilled to unveil a delightful addition to the" +
                    "heart of Harajuku—the vibrant and irresistible Harajuku Ice Cream Machine.",
                imageURL: "https://i.ibb.co/D4YKW03/itemsadf.png",
                content : 
                        <div style ={{width:'100%'}}> 
                            <div style = {{width :'100%', height :'300px', display:'flex', justifyContent:'center'}}>
                                <img src = "https://i.ibb.co/D4YKW03/itemsadf.png"  />
                            </div>
                            <div style ={{padding:'5%', boxSizing:'border-box', textAlign:'justify'}}>
                                <h1 style ={{textAlign:'center', paddingBottom:'15px'}}> Introducing the Harajuku Ice Cream Machine </h1>
                                <p>
                                    Greetings, dessert enthusiasts and culture seekers!
                                    Today, we're thrilled to unveil a delightful addition to the 
                                    heart of Harajuku—the vibrant and irresistible Harajuku Ice Cream Machine.
                                    Nestled amid street art, eclectic fashion, and youthful energy, 
                                    this sweet haven promises to be a treat for your taste buds and a feast for your eyes.
                                </p>
                                <p>
                                    Step into the world of Harajuku and prepare to be enchanted by a rainbow of flavors that
                                    mirror the lively spirit of this cultural hub. The Harajuku Ice Cream Machine takes inspiration 
                                    from the vivacious colors and boundless creativity that define this district, 
                                    offering a symphony of flavors that celebrate the diversity of the area.

                                    The machine boasts an array of 
                                    tantalizing options that cater to every scoop. 

                                </p>
                                <p>
                                    The Harajuku Ice Cream Machine isn't just a dessert destination; it's a cultural experience.
                                    The communal atmosphere around the machine provides a shared moment of joy, where people from 
                                    different walks of life come together to enjoy the simple pleasures of life—delicious ice cream and 
                                    the vibrant spirit of Harajuku.

                                    So, whether you're a seasoned local or a first-time visitor, make sure to stop by and indulge in the 
                                    sweetness that is the Harajuku Ice Cream Machine. Let the flavors and colors transport you 
                                    to the heart of this cultural melting pot, where every bite is a celebration of the unique and 
                                    extraordinary.
                                </p>

                                <h4> Join us in embracing the sweetness that defines Harajuku!</h4>
                            </div>

                            

                        </div>
            },
        ];


    return (
        <>
            <News NewsList={NewsList}/>      
        </>
    )

}


export default RenerPage;