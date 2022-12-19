import React , {useState,useEffect} from 'react'
import { Slist } from './Slist'
import { getFirestore,collection, deleteDoc, doc, getDocs, updateDoc,addDoc } from "firebase/firestore";
import {db} from '../db';
export const Mainlist = () => {
  const contactUseRef = collection(db , "Category")
  const [Categ , SetCateg] = useState([])
  const [apii , setApi] = useState({})
  const fetchPost = async () => {
      await getDocs(contactUseRef)
         .then((snapshot) => {
    const newData = snapshot.docs
    .map((doc) => ({...doc.data(), id : doc.id}))
    SetCateg(newData)         
    })
    }
    useEffect(()=>{
      fetchPost();
    }, [])
  
  return (
  <>
  {Categ.map((element)=> {
return <Slist  apii={element.Category} key={element.api}/>
   })}
  </> 
  )
}
