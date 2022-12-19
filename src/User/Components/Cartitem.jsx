import React, { useState } from 'react'

const Cartitem = () => {
    const [data , setData] = useState([])
    const set = () => {
        setData(()=> [
          {  image : "doda",
            visibl : true}
        ])
     
    }
  return (
   <>
   <button onClick={set}>Set</button></>
  )
}

export default Cartitem