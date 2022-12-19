import React, { useEffect, useState } from 'react'
import { collection, getDocs,addDoc } from "firebase/firestore";
import {db} from '../db';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewProduct from './ViewProduct';

export const Cart = () => {
  const [product,setProduct]=useState({
    Name : "",
    Image : "",
    Price : 0,
    Description : "",
    Display : false
  })
  const reset = () => {
    setProduct({
      Name : "",
      Image : "",
      Price : 0,
      Description : "",
      Display : false
    })
  }
  // fetch products from db
  const [Cartapi , setapi] = useState([])
const contactUseRef = collection(db , "Products")
const fetchPost = async () => {
  await getDocs(contactUseRef)
     .then((snapshot) => {
const newData = snapshot.docs
.map((doc) => ({...doc.data(), id : doc.id}))
setapi(newData)         
})
}
useEffect(()=>{
  fetchPost();
}, [])
//Enf Of Fetch Product Section

  const handleSubmit = async(name,price,image) => {
            try {
          const docRef = await addDoc(collection(db, "Cart"), {
             Name : name,
             Price : Number(price),
             Image : image,
             Quantity : Number(1)
              },    
         )
          const id = docRef.id
          toast.success("Item Added To Cart")
        } catch (e) {
          toast.error("Unable To Add Product To Cart")
        }
    }
  return (
    <>
    <ToastContainer/>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
       {  Cartapi.map((e) => {
              const { Name , Image , Price , Description } = e
              return(
                <div className="relative">
            <div key={Description} className=" group relative"  onClick={()=>setProduct({
                    Name : Name,
                    Image : Image,
                    Price : Price,
                    Description : Description,
                    Display : true
                  })}>
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={Image}
                  alt={Description}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full "
                />
                <p className="text-sm font-medium text-gray-800 absolute right-3 top-2 text-xl ">₹{Price}</p>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a className="text-black font-medium">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {Name}
                    </a>
                    <br />
                    <span className='my-2'>{Description.substring(0,40)}...</span>

                  </h3>
                 </div>
              </div>
            </div>
              <button className='w-full h-auto text-lg p-3 bg-gray-200 rounded-lg mt-3 hover:bg-red-500 hover:text-white'onClick={() => {
        handleSubmit(Name,Price,Image)
      }} >Add To Bag</button>
              
            </div>
          )})}
        </div>
      </div>
    </div>
    {console.log(product.Display)}
    {product.Display && <ViewProduct data={product} Reset={reset}/>}
    </>
  )
}
