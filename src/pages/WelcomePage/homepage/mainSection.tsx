




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
            <div style = {{width :'100%',  marginTop:'15px', display:'flex' , alignItems :'center',  position:'relative', flexDirection:"column"}}>

                {/* <h1 style = {{fontWeight:'900', fontSize:'45px'}}> HARAJUKU ICECREAM MACHINE </h1> */}

                <div style = {{display:'grid', gridTemplateColumns :'10% 80% 10%', width:'100%'}}>

                    <div style = {{ display:'flex', justifyContent:'center', alignItems:'center', }}>
                        {/* grids of information will go here */}
                    </div>
                    <div style = {{  width:'100%', position:'relative', marginTop :'50px'}}>
                        <div style = {{width:"100%", display:"grid"}}> 
                                <div style ={{width:'100%', height : "39vw", overflow :'hidden', position:'relative'}}>
                                    {/* <img onMouseOver={MacineAction} onMouseLeave={MacineAction} style = {{ cursor :'pointer', transition :'all 0.5s', position:'absolute', width:'100%', height :'100%', objectFit:'contain', opacity:'0' }} src = "https://i.ibb.co/r5wJ19z/icecream2.png"/>  */}
                                    <img style = {{width:'100%', height :'100%', objectFit:'contain'}} src = "https://i.ibb.co/7bDPn7Q/icecream2.png"/> 
                                </div>
                        </div>
                    </div>


                    <div style = {{ display:'flex', justifyContent:'center', alignItems:'center'}}>
                        {/* grids of information will go here */}

                    </div>

                </div>


            </div>
        </>
    );
}


export default RenderSection;