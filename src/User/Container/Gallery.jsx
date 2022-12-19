import React, { useState } from 'react'
import { Imagemodel } from './Imagemodel'
import { useDispatch } from 'react-redux'
import { getImage,popImage } from '../Redux/Image/imageSlice'
export const Gallery = (props) => {
  const {data} = props
  const dispatch = useDispatch()
  const handleClick = (e) => {
    dispatch(popImage())
dispatch(getImage({
  image : e.target.src,
  visibl : true
}))
  };
  return (
    <section className="overflow-hidden text-gray-700 ">
    <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
      <div className="flex flex-wrap -m-1 md:-m-2">
        {data.map((element)=>{
          return(
            <div key={element.id}  className="flex flex-wrap w-1/3">
          <div className="w-full p-1 md:p-2" >
           <a target="_blank" ><img alt="gallery" onClick={handleClick} className="block object-cover object-center w-full h-3/4 rounded-lg"
              src={element.urls.full} /></a>
          </div>
        </div>
        )})}
        <Imagemodel/>
      </div>
    </div>
  </section>
  )
}
