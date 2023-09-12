




let RenderPage : React.FC<{children : React.ReactNode}> = (props) => { 
    let MaxPageWidth = 3000;             // max page size width

    return (
        <>
            <div style = {{width:"100%", display:'flex', justifyContent : 'center'}}>
                <div id = "pageWrapper" style = {
                    {
                        width: `${MaxPageWidth}px`,
                        maxWidth:'3000px', position :'relative', overflow:'hidden'
                        ,background:'#fcfbfc'
                    }}>
                    {props.children}
                </div>

            </div>
        </>
    )
}

export default RenderPage;