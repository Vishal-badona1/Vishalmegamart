import React from 'react'
import { GiCancel } from "react-icons/gi";
import {FaDownload } from "react-icons/fa";
import { saveAs } from 'file-saver'
import { useSelector , useDispatch } from 'react-redux';
import { getImage, popImage } from '../Redux/Image/imageSlice';

export const Imagemodel = () => {
  var number = 0
  const image = useSelector(state => state.image)
  const dispatch = useDispatch()
  const downloadImage = (image) => {
    saveAs(image, 'image.jpg') 
  }

  const handleClick = () => {
    dispatch(popImage())
  dispatch(getImage({
    image: "",
    visibl: false
  }))
  }
  const renderImage = image.map((element) => {
    number = number + 1
    return (
      <> {element.visibl ? <div key={number} style={{ backdropFilter: " blur(80px)", backgroundImage: `${element.image}` }} className={`flex justify-center w-screen h-screen fixed inset-0 z-40 bg-opacity-30 backdrop-blur-sm `}>
        <button className='absolute right-72 top-12' onClick={handleClick}><GiCancel
          color='red'
          fontSize="50" />
        </button>
        <button className='absolute left-72 top-12' onClick={()=> downloadImage(element.image)}><FaDownload
          color='blue'
          fontSize="50" />
        </button>
       <img className='object-contain w-auto h-auto' src={element.image} alt="" />
      </div> : ""}</>
    )
  })
  return (
    <>
      {renderImage}
    </>
  )
}
