import "./Styling.css"
import { ReactNode } from "react"
import react from "react";
import PageWrapper from "../../components/PageWrapper/pageWrapper";

export interface NewsItem{
    Title : String,
    Date : String,
    Description : String,
    imageURL: string,
    content : ReactNode,
}



let RenerPage : React.FC<{NewsList : NewsItem[]}> = (props) => { 
    let [selectedContent, set_SelectedContent] = react.useState<NewsItem | undefined>(undefined);


    let readMore_Handler = ( item : NewsItem | undefined) => { 

        console.log("Item  selected ");
        if (selectedContent != item) set_SelectedContent(item);
    } 

    return (
        <>
            { 
                selectedContent != undefined && 
                <>
                    <div onMouseDown={() => { readMore_Handler(undefined)}}  className = "overlay_Container">
                        
                        <div onMouseDown={(event) => {event.stopPropagation();}} className= "overlay_Inner"> 
                            <div style = {{width:'100%', height :'100%' , overflow:'auto'}}>
                                {selectedContent.content} 
                            </div>
                        </div>

                    </div>


                </>     
                
            }
            <div className="pageContainer"> 
                <h1> Recent Posting </h1>
                <div className="contentContainer"> 
                        {
                           props.NewsList != undefined && props.NewsList.map( (element:NewsItem) => { 
                                return <>
                                    <div className="itemContainer">
                                        <div onMouseDown={ () => {readMore_Handler(element)}} className = "item">
                                            <div style = {{width:'100%', height:"100%",  overflow :'hidden'}}>
                                                <img src = {element.imageURL} />
                                            </div>
                                            <div className ="itemDescription" style = {{width:'100%', height:'100%'}}>
                                                <h2 style = {{marginTop:'2%', margin:'0px'}}> {element.Title} </h2>
                                                <p> {element.Date} </p>
                                                <div style = {{height:'50%'}}>

                                                    <div className="mainDescription"> {element.Description} </div>
                                                </div>
                                                <p  onMouseDown={ ()  => {readMore_Handler(element)}} style = {{color:'blue', cursor:'pointer'}}> read more </p>
                                            </div>
                                        </div>
                                    </div>

                                </>
                           }) 
                        }
                </div>
            </div>

        </>
    )

}


export default RenerPage;