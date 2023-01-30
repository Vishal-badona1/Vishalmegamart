import { collection, doc, getDocs } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../db'
import { Link } from 'react-router-dom'
export const Footer = () => {
  const [Logo , setLogo] = useState("")
  const [pages, setPages] = useState([])
  const fetchLogo = async() => {
    const logoref = collection(db , "Logo")
    await getDocs(logoref)
    .then((snapshot)=>{
      const newData = snapshot.docs
      .map((doc)=> ({...doc.data()}))
      setLogo(newData[0].Src)
    })
  }
  const fetchPage = async () => {
    const pageRef = collection(db, "Pages")
    await getDocs(pageRef)
      .then((snapshot) => {
        const newData = snapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
        setPages(newData)
      })
  }
  useEffect(()=>{
    fetchLogo()
    fetchPage()
  },[])
  return (
    <>

<footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
            <img src={Logo} className="mr-3 h-24" alt="Flowbite Logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
        {pages.map((e)=>{
          const {Display,Page,Path}=e
          return(
          <div key={Math.random()}>{Display? <li>
                <Link to={Path} className="mr-4 hover:underline md:mr-6">{Page}</Link>
            </li>:""}
            </div>
          )
        })}        
        </ul>
    </div>
</footer>

</>
  )
}


           