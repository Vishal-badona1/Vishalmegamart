import React, { useState , useEffect } from 'react'
import { db } from '../db'
import { getDocs,collection,doc } from 'firebase/firestore'
import Slider from "../Container/Slider"
export const PreSlider = () => {
  const images = []
const slideRef = collection(db , "Slider")
 const fetchSlide = async() => {
await getDocs(slideRef)
.then((Snapshot) => {
  const newData = Snapshot.docs
    .map((doc) => ({...doc.data()}))
    newData.map((e) => {
     images.push(e.Image)
        })     
})
 }
 useEffect(() => {
fetchSlide()
 },[])



    return (
        <>
        
  <Slider images={images}/>
        </>
    )
}

{/* {slider.map((e)=>{
    return(
        <img src={e.Image} className="img-fluid" alt="Responsive image"/> 
    )
})} */}
export default PreSlider