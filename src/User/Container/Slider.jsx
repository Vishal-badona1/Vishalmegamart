import React, { useState , useEffect } from 'react'
export const Slider = (props) => {
    const Slide = props.images
 const [value , setValue] = useState(0)
setInterval(() => {
    if(value < Slide.length -1){
  setValue(value + 1)
    }
    else {
        setValue(0)
    }
}, 10000);



    return (
        <>

            <div className="box mw-100 mt-5 ">
             {Slide.length!==0?
    <img src={Slide[value]} style={{height:"150px"}} className="img-fluid w-screen " alt="Responsive image"/>
             :   <img style={{height:"150px"}} src="https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/d95f87a62b6c1393.jpg?q=50" className="img-fluid w-screen" alt="Responsive image"/>}

                
            </div>
        </>
    )
}

export default Slider