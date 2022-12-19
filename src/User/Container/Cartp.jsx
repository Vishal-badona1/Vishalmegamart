// import React, { useState } from 'react'

// export const Cartp = (props) => {
//     const [cart , setCart] = useState([])
//     const { Cartapi} = props
//     props.setCart(cart)
//   return (
//  <>
//      <div className="flex flex-wrap w-3/4 h-screen ">
//           {
//             Cartapi.map((e) => {
//               const { alt_description , likes , description } = e
//               const {full} = e.urls
//               return (
//               alt_description?<div style={{height: "544px"}} className="card w-72   rounded-md shadow-xl mx-3 my-5">
//       <img src={full} alt="" className="w-72 h-80"/>
//       <h1 className="text-3xl text-center my-2"><b>{alt_description.substring(0,34)}</b></h1>
//       <p className="text-1xl text-gray-400 my-3">
//        {alt_description}
//       </p>
//       <h1 className="text-3xl text-center my-3"><b>${likes}.00</b></h1>
//       <button className="w-full bg-blue-500 rounded-bl-md rounded-br-md p-3 text-white " onClick={(e) => {
//                       setCart((pre) => [
//                         ...pre, {
//                           id: cart.length ,
//                           image : full,
//                           name: alt_description,
//                           price: likes,
//                         }
//                       ])
//                     }}><b className="text-2xl w-full">BUY NOW</b></button>
//     </div>
//              : "" )
//             })
//           }
//         </div></>
//   )
// }
