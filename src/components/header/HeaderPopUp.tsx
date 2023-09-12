

import HeadingContent, {HeaderItem} from './HeadingContent';
import Styling from "./HeaderPop.module.css";
import MyBrowser from "../../Browser/MyBrowser";

let RenderHeaderPopup : React.FC<{headerItems : HeaderItem[]}> = (props) => { 
    return (
        <>
            <div style = {
            {
                display:'flex', justifyContent:'center',
                position:'fixed', left :'0', top : '0%', zIndex :"100",
                flexDirection :'row', width :'100%', overflow :'hidden',
                background:'white',
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px",
                opacity :"90%"
          
            }}> 
                    {
                        props.headerItems.map( (item : HeaderItem) => {
                            return (
                                    <div onMouseDown={() => { MyBrowser.setPage(item.url) }}  
                                    className= {Styling.items} 
                                    style = {{ textDecoration : `${item.url == MyBrowser.getPage() ? "underline" : "none"} `}}>
                                        {item.name}
                                    </div>
                            )
                        })
                    }
            </div>
        
        </>
    )
}


export default RenderHeaderPopup;