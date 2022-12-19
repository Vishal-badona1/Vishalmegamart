import React, { useEffect, useState } from 'react'
// import Product from '../Api/Products'
import { db } from '../db'
import { collection, getDocs, } from 'firebase/firestore'
import { showModel , hideModel } from '../Redux/Product/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export const Products = () => {
const dispatch = useDispatch()
const [Data , setData] = useState({Title:""})
    const [SC , setSc] = useState([])
const fetchRef = collection(db , "Shortcuts")
const fetchShort = async() => {
await getDocs(fetchRef)
.then((snapshot) => {
    const newData = snapshot.docs
    .map((doc) => ({...doc.data(), id : doc.id}))
    setSc(newData) 
})
}
useEffect(() => {
fetchShort()
},[])


    return (
        <>
            <div className="container mw-100 scrollbar-hide">
                <div className="bg-slate-50 flex justify-center  w-screen scrollbar-hide overflow-scroll">
                    {SC.map((element) => {
                        const {id,Image,Title} = element
                        
                        return (
                            <div className="item mx-5" key={id} onClick={() => {dispatch(hideModel());dispatch(showModel(Title))}} >
                                <Link to="viewproduct"><img src={Image} alt="" className='img-thumbnail my-2 w-10 h-10 sm:h-24 sm:w-24 '/></Link>
                                <p className='text-center'>{Title}</p>
                              
                            </div>
                        )
                    })}
                </div>
            </div>
           
        </>
    )
}
