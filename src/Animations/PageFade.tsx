

import React from "react";


let RenderAnimation : React.FC<{children : React.ReactNode}> = (props) => {

    let containerRef = React.useRef<HTMLDivElement>(null);
    let [opacity , setopacity] = React.useState(0);
    React.useLayoutEffect(
        ()=>{
            if (opacity == 0)
            {
                setopacity(100);
            }
        }

    );

    return(
        <>
            <div ref = {containerRef} style = {{ transition :'opacity 0.8s', opacity : `${opacity}%`}}>
                {props.children}

            </div>
        </>
    );

}


export default RenderAnimation;