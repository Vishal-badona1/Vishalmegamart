import React, { useEffect, useState } from 'react'
import Model from './Model';
import Simage from "../images/Simage.png"
import { useDispatch } from 'react-redux';
import { showModel } from '../Redux/Product/productSlice';
import { ToastContainer, toast } from 'react-toastify';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../db';
import 'react-toastify/dist/ReactToastify.css';
export const Slist = (props) => {
    const { apii } = props
    const dispatch = useDispatch()
    const api = `https://api.unsplash.com/search/photos?page=2&query=${apii}&client_id=${process.env.REACT_APP_KEY}`;
    const img = 'https://img.freepik.com/free-psd/beauty-poster-template-with-woman_23-2148220697.jpg?w=2000'
    const [dataa, setData] = useState([])
    const [model, setModel] = useState([])
    const getproduct = async () => {
        const data = await fetch(api)
        const response = await data.json()
        setData(response.results)
    }
    useEffect(() => {
        getproduct()
    }, [])

    const handleSubmit = async(name,price,image) => {
        try {
      const docRef = await addDoc(collection(db, "Cart"), {
         Name : name,
         Price : Number(price),
         Image : image,
         Quantity : Number(1)
          },    
     )
      toast.success("Added To Cart")
    } catch (e) {
      toast.error("Unable To Add To Cart")
    }
    }

    return (
        <>
<ToastContainer/>
<div className="flex overflow-scroll scrollbar-hide">
<div class="py-6 ">
  <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden w-screen sm:w-92 mx-3">
    <div class="w-36 h-36" >
    <img src="https://www.polytechnichub.com/wp-content/uploads/2017/04/Electronic.jpg" alt="" className='h-full w-full' />
    </div> 
    <div class="w-80 p-4">
      <h1 class="text-gray-900 font-bold text-2xl">Best Of {apii}</h1>
      <p class="mt-2 text-gray-600 text-sm">Slide To View More </p>
      <div class="flex item-center mt-2">
        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
      </div>
    </div>
  </div>
</div>
{dataa.map((element)=>{
    const {alt_description , likes } = element
        const {full} = element.urls
        const price = likes * 61
        return(
<>

<div class="py-6 ">
  <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden w-screen sm:w-92 mx-3">
    <div class="w-36 h-36" >
    <img src={full} alt="" className='h-full w-full' onClick={(e) => 
dispatch(showModel({
image: element.urls.full,
value: element.alt_description,
price: price,
name: element.alt_description,
bio: element.description,
visible: true 
}))
}/>
    </div> 
    <div class="w-80 p-4">
      <h1 class="text-gray-900 font-bold text-2xl">{alt_description.substring(0,15)}</h1>
      <p class="mt-2 text-gray-600 text-sm">{alt_description.substring(0,35)}</p>
      <div class="flex item-center mt-2">
        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
      </div>
      <div class="flex item-center justify-between mt-3">
        <h1 class="text-gray-700 font-bold text-xl">${price}</h1>
        <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded" onClick={() => handleSubmit(alt_description,price,full)}>Add to Card</button>
      </div>
    </div>
  </div>
</div>

</>
        )
})}
</div>
<Model key={model}/>
        </>
    )
}


{/* <div className="flex overflow-scroll scrollbar-hide mx-2 mt-8">
<div className="flex mt-10">
<div className="flex-none w-80 bg-orange-100 overflow-hidden border-2 border-t-2">
    <div className="w-80 h-80">
        <div className="container w-full h-full ">
            <h1 className="font-mono text-center w-auto text-3xl  ">
                BEST OF {apii.toUpperCase()}
            </h1>
            <img src={Simage} alt="" className='h-64 w-80 opacity-75 hover: w-96' />
        </div>
    </div>
</div>

    {dataa.map((element) => {
        
  const {alt_description , likes } = element
        const {full} = element.urls
        const price = likes * 61
        return (
            <>
            {alt_description && likes && full ? 
<div className="flex-none w-80 h-92 bg-orange-100 overflow-hidden -mt-9  mx-2 border-2 border-t-2 ">
    <div className="w-80 h-80">
        <div className="container w-full h-full ">
            <a href="#">
                <img class="p-3 rounded-t-lg w-80 h-52" src={element.urls.full} alt={element.alt_description} onClick={(e) => 
dispatch(showModel({
image: e.target.src,
value: e.target.alt,
price: price,
name: element.user.name,
bio: element.user.bio,
visible: true 
}))
}/>
            </a>
            <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white px-2 h-12">{element.alt_description ? element.alt_description.slice(0, 50) : element.alt_description}</h5>
                </a>
                <div class="flex items-center mt-2.5 mb-5">
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div>
            <div class="flex items-center justify-between mx-2">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">₹{price}</span>
                    <button  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  onClick={() => handleSubmit(alt_description,price,full)}>Add to cart</button>
                </div>
        </div>
    </div>
</div>:"" }
</>
      
        )
    })}
    <Model key={model}/>
</div>

</div> */}