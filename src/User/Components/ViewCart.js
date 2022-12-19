import React, { useState, useEffect } from 'react'
import { getFirestore,collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from '../../User/db';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth0 } from "@auth0/auth0-react";
const ViewCart = () => {
    const { loginWithRedirect,user, isAuthenticated, isLoading } = useAuth0();
  const contactUseRef = collection(db , "Cart")
  const [contact , setContact] = useState([])
const total = []
const [Total , setTotal] = useState(0)
  const fetchPost = async () => {
      await getDocs(contactUseRef)
         .then((snapshot) => {
const newData = snapshot.docs
.map((doc) => ({...doc.data(), id : doc.id}))
setContact(newData)    
newData.map((e) => {
 total.push({price : e.Price * e.Quantity})
})

})
setTotal((total.reduce((a,v) =>  a = a + v.price , 0 )))

  }

  useEffect(()=>{
      fetchPost();
  }, [])

  
  // End Fetch Post Code

  //Delete Cart

  const deleteCart = async(id) => {
    const userCon = doc(db , "Cart" ,id)
    await deleteDoc(userCon)
    if(deleteDoc) {
    toast("Product Has Been Deleted")
    }else{
        toast.error("Could'nt Delete The Product")
    }
    fetchPost()
    }
  
    const prev = (id,quantity) => {
      const db = getFirestore(); // initialize Firestore

      const docRef = doc(db, "Cart", id);
      
      const data = {
        Quantity : quantity - 1
        
      };
      
      updateDoc(docRef, data)
      .then(docRef => {
         fetchPost()
        })  .catch(() => {
          toast.error("Could Not Reduce The Cart Quantity")
        })
    }
    const nxt = (id,quantity) => {
      const db = getFirestore(); // initialize Firestore

      const docRef = doc(db, "Cart", id);
      
      const data = {
Quantity : quantity + 1
      };
      
      updateDoc(docRef, data)
      .then(docRef => {
         fetchPost()
        }) .catch(() => {
          toast.error("Could Not Increase The Cart Quantity")
        })

   
    }
    const signup = () => {
        window.location.href="https://dev-ncvxpuvaouhtodwv.us.auth0.com/u/signup?state=hKFo2SBrOTJzbnl0UU9ubWpkTXJHNVNLM1pEVjNEQTFFd3cyM6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHJIR1p5ZG1YeV9IdXpKSlM1TzZrSktzMzI5LXJXVVhho2NpZNkgSXB3SlJ0V1lyaXhGVkliSzh1aGxPVTdrNU5GaG1yUUw";  
    }

  return (
<>
{ isAuthenticated ? <>
<ToastContainer/>

<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="py-3 px-6">
                    Product
                </th>
                <th scope="col" className="py-3 px-6">
                    Qty
                </th>
                <th scope="col" className="py-3 px-6">
                    Price
                </th>
                <th scope="col" className="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {contact.map((element) => {
          const Name = element.Name
         
              return(
                <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-32">
                   <a href={element.Image} target="_blank"><img src={element.Image} alt="Apple Watch" className='w-full h-full'/></a>
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white toUppaerCase">
                    {Name}
                </td>
                <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                        <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick={() => prev(element.id,element.Quantity)} disabled = {element.Quantity === 1}>
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                        <div>
                            <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={element.Quantity}  disabled required/>
                        </div>
                        <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick={() => nxt(element.id,element.Quantity)}>
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                ₹{element.Price}
                </td>
                <td className="py-4 px-6">
                    <a onClick={() => deleteCart(element.id,element.Quantity)} className="font-medium text-red-600 dark:text-red-500 cursor-pointer">Remove</a>
                </td>
            </tr>
            </>
              )
            })}
        </tbody>
         </table>
        
</div>

  <hr/>
{contact.length!==0?<footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 font-serif">
    <span className="text-4xl text-black-500 sm:text-center dark:text-white-500">Subtotal :- 
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-4xl text-black-500 dark:text-gray-400 sm:mt-0">
        
        <li>
            <a href="#" className="hover:underline">{Total}</a>
        </li>
    </ul>
</footer>: <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
  <div class="mx-auto max-w-screen-xl text-center">
      <span class="text-lg text-gray-500 sm:text-center dark:text-gray-400">CART IS EMPTY</span>
  </div>
</footer>}
    <hr className=' border-b'/>
    </>: 
    <div className='h-screen flex justify-center items-center'>
<div id="popup-modal" tabindex="-1" class="z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6 text-center">
                <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">You Must Login To Continue On This Page</h3>
                <button data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={() => loginWithRedirect()}>
                 Login
                </button>
                <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={signup}>Sign Up</button>
            </div>
        </div>
    </div>
</div>
</div>
}
</>
  )
}

export default ViewCart