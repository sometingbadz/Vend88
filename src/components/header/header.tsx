import React from "react";
import "./styling.css";


import HeadingContent, {HeaderItem} from './HeadingContent';

let headerItems : HeaderItem[] = [

    {
        name :"Vending",
        url : "asf"
    },
    {
        name :"location",
        url : "asf"
    },
    {
        name :"Contact",
        url : "asf"
    },
]

let renderHeander : React.FC<{}> = (props) => (
    <>
        <div id = "header" className="header_Container">

            <div className="content_Container">
                <div className="logoContainer">
                    [LOGO]
                </div>
                <div className="navigation">
                    <HeadingContent HeaderElements = {headerItems} />

                </div>
            </div>

        </div>
    </>
)


export default renderHeander;