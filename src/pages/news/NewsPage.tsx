import React, { useEffect } from "react";
import News, {NewsItem} from "./news";


let RenerPage : React.FC<{}> = (props) => { 
    let NewsList : NewsItem[] = 
        [
            {
                Title : "Experience the Harajuku Ice Cream Delight at Auburn Central!",
                Date : "10/01/2024",
                Description : 
                    "Greetings, dessert enthusiasts and culture seekers!" +
                    "Today, we're thrilled to unveil a delightful addition to the" +
                    "heart of Harajuku—the vibrant and irresistible Harajuku Ice Cream Machine.",
                imageURL: "https://i.ibb.co/NmVwDNN/Image-20240109164709.jpg",
                content : 
                        <div style ={{width:'100%'}}> 
                            <div style = {{width :'100%', height :'300px', display:'flex', justifyContent:'center'}}>
                                <img src = "https://i.ibb.co/NmVwDNN/Image-20240109164709.jpg"  />
                            </div>
                            <div style ={{padding:'5%', boxSizing:'border-box', textAlign:'justify'}}>
                                <h1 style ={{textAlign:'center', paddingBottom:'15px'}}> Introducing the Harajuku Ice Cream Machine </h1>
                                <p>
                                    Greetings to all the ice cream enthusiasts and those with a sweet tooth! We are delighted to announce the grand opening of our newest ice cream venture, the Harajuku Ice Cream Machine, situated in the heart of Auburn at 57-59 Queen St, Auburn NSW 2144. Join us on an exciting journey as we introduce you to the flavorful wonder that is our Japanese-style vanilla soft-serve.


                                </p>
                                <p>
                                    At the Harajuku Ice Cream Machine, we don't just serve ice cream; we create an experience. Our Harajuku soft-serve boasts a creamy, milky Hokkaido-style taste that delicately dances on your taste buds. It's a treat that is both gentle on the senses and immensely satisfying, providing a unique fusion of Japanese sweetness and Australian charm.



                                </p>
                                <p>
                                     So, come and join us at the Harajuku Ice Cream Machine for a taste of something extraordinary. Our doors are open for you to treat yourself to a swirl of joy and to share the sweetness with your loved ones. Whether you're a local or just passing through, our ice cream oasis awaits, promising an experience that goes beyond a mere dessert.


                                </p>

                            </div>

                            

                        </div>
            },
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