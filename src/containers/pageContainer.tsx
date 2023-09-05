import React, { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";



let RenerPage : React.FC<{children : ReactNode, isActive : String }> = (props) => { 

    let divRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
            let handleTransitionEnd = () => {
                // The transition has finished
                // console.log('Transition finished.');
                if (divRef.current != null && !(props.isActive)) divRef.current.style.display = "none";
            
            };
            if (divRef.current != null){
                if (props.isActive){
                    divRef.current.style.display = "block";
                    // divRef.current.style.opacity = "0";             // set to visible

                    divRef.current.style.opacity = "1";             // set to visible
                } 
                else divRef.current.style.opacity = "0";             // set to visible

                // Attach the event listener to the DOM element
                divRef.current.addEventListener('transitionend', handleTransitionEnd);      // on transition end, invisible
            }
        
            // Clean up the event listener when the component unmounts
            return () => {
                divRef.current?.removeEventListener('transitionend', handleTransitionEnd);
            };


      });
    

    return (
        <>
            <div ref = {divRef} style = {{ transition : "all 0.5s", opacity : "0",/* transform : `translate(${ (!props.isActive) ? "100vw" : "0"}, 0 )`*/ } }> 

                { props.children }
            </div>
            
        </>
    )

}


export default RenerPage;