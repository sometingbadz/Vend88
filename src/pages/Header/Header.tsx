import React from "react";

import HeadingContent, {HeaderItem} from '../../components/header/HeadingContent';
import Header from "../../components/header/header";
import PageUris from "../../PageUris"

  
let headerItems : HeaderItem[] = [
    {
        name :"Vends",
        url : PageUris.vending,
        subitems : {
            items : // header items interface
            [
                {
                    name: "Harajuku",
                    url: PageUris.vending + "/0"
                },
                {
                    name: "Hokkaido",
                    url: PageUris.vending +"/1"
                }
            ]
        }
    },
    {
        name :"Location",
        url : PageUris.location

    },
    {
        name :"About Us",
        url : PageUris.about
    },
    {
        name :"News",
        url : PageUris.news 

    },
    {
        name :"Contact",
        url : PageUris.contact

    },
];

let RenerPage : React.FC<{}> = (props) => { 
    return (
        <>
            <Header headerItem={headerItems}  />
        </>
    )

}


export default RenerPage;