




let RenderPage : React.FC<{children : React.ReactNode}> = (props) => { 
    let MaxPageWidth = 3000;             // max page size width
    let Footer =
    <>
        <div className='fooder' style ={{width:`100vw`, textAlign:'center', background:'white', padding:'2%', boxSizing:'border-box'}}>
            [Footer] - Copyright © 2023 
        

        </div>    
    </>
    return (
        <>
            <div style = {{width:"100%",  display:'flex', justifyContent : 'center', minHeight:'100vh'}}>
                <div id = "pageWrapper" style = {
                    {
                        width: `${MaxPageWidth}px`,
                        maxWidth:'3000px', position :'relative', overflow:'hidden'
                        ,background:'#fcfbfc', minWidth:'220px',
                    }}>
                    {props.children}
                </div>

            </div>
            {Footer}
        </>
    )
}

export default RenderPage;