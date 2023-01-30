import React , {useState,useEffect} from 'react'
import { getFirestore,collection, deleteDoc, doc, getDocs, updateDoc,addDoc } from "firebase/firestore";
import {db} from '../db';
import { Link } from 'react-router-dom';
import ItemHome from './ItemHome';

const ItemSideBar = () => {
    const [api,setapi] = useState("")
    const [query , setQuery] = useState("")
const set = (e)=>{
    setapi(e.target.value)
}
const [display , setDisplay] = useState({
    nav : "hidden",
    bar : true
})
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

  const toogleDisplay = () => {
    if(display.nav==="hidden"){
        setDisplay({nav:"block"})
    }else{
        setDisplay({nav:"hidden"})
    }
  }
  return (
   <div className='flex h-[calc(100%_-_24rem)] '>
    <h1 className='absolute z-40 right-12 block sm:hidden text-gray-800 hover:text-red-500 ' onClick={toogleDisplay}><i className="fa fa-bars "></i></h1>
<aside class={`w-64 border-2  ${display.nav} sm:block absolute sm:static z-40 bg-white `} aria-label="Sidebar" id='Navbbbar'>
   <div class="overflow-y-auto py-4 px-3 rounded ">
      <ul class="space-y-2">
{api &&  <li>
       <input type="text" value={query} className="border-2 border-gray-300 text-center" placeholder={api} onChange={(e)=>setQuery(e.target.value.toLowerCase())} />
     </li>}
{Categ.map((e)=>{
    return(
        <><li>
        <Link to="/items" class="flex items-center p-2 text-base font-normal rounded-lg  hover:bg-gray-100  " >
         <input type="button" value={e.Category} onClick={set} className="bg-white hover:bg-gray-100"/>
        </Link>
     </li>
       </>
    )
})}
      </ul>
   </div>
</aside>
<ItemHome api={api} key={api} search={query}/>
   </div>
  )
}

export default ItemSideBar