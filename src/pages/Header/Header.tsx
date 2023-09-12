import React from "react";

import HeadingContent, {HeaderItem} from '../../components/header/HeadingContent';
import Header from "../../components/header/header";
import PageUris from "../../PageUris"

let headerItems : HeaderItem[] = [

    {
        name :"Home",
        url : PageUris.home
    },
    {
        name :"Vending",
        url : PageUris.vending
    },
    {
        name :"location",
        url : PageUris.location

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