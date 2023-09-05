import React, { useLayoutEffect } from "react";



import "./Styling.css";
import GridItemContainer from '../../components/GridItemD/GridItemContainer';

let RenerPage : React.FC<{}> = (props) => { 


    return (
        <>
            {/* <div style = {{width:'100vw', display:'flex', flexDirection:'column',  justifyContent:'center', alignItems:'center'}}>


            </div> */}
            <GridItemContainer/>
        </>
    )

}


export default RenerPage;