




let RenderSection : React.FC<{}> = (props) => {

    let MacineAction = (event: React.MouseEvent<HTMLImageElement> ) => { 
        let k = event.currentTarget;

        if (event.type == "mouseover" ){

            k.style.opacity = "1";
        }else 
            k.style.opacity = "0";
            
    }

    return (
        <>
            <div style = {{width :"100%",  marginTop:'150px', display:'flex' , justifyContent :'center' }}>

                <div style = {{width:"70%", display:"grid", gridTemplateColumns : "50% 50%",}}> 
                            <div style ={{width:'100%', height : "35vw", overflow :'hidden', position:'relative'}}>
                                <img onMouseOver={MacineAction} onMouseLeave={MacineAction} style = {{ cursor :'pointer', transition :'all 0.5s', position:'absolute', width:'100%', height :'100%', objectFit:'contain', opacity:'0' }} src = "https://i.ibb.co/qBkL6JX/With.png"/> 
                                <img style = {{width:'100%', height :'100%', objectFit:'contain'}} src = "https://pospal.com.au/wp-content/uploads/2023/10/With.png"/> 
                            </div>
                            <div style ={{width:'100%', height : "35vw", overflow :'hidden', position:'relative', borderLeft:'0.3px solid black' }}>
                                <img onMouseOver={MacineAction} onMouseLeave={MacineAction} style = {{ cursor :'pointer', transition :'all 0.5s', position:'absolute', width:'100%', height :'100%', objectFit:'contain', opacity:'0' }} src = "https://i.ibb.co/qBkL6JX/With.png"/> 
                                <img style = {{width:'100%', height :'100%', objectFit:'contain'}} src = "https://pospal.com.au/wp-content/uploads/2023/10/With.png"/> 
                            </div>
                </div>

            </div>
        </>
    );
}


export default RenderSection;