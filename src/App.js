import './App.css';
import React , {useEffect, useState} from 'react';
import { Home } from './User/Components/Home';
import {Cart} from './User/Components/Cart'
import { Header } from './User/Components/Header';
import { Services } from './User/Components/Services';
import Contact from './User/Components/Contact';
import Error from './Error';
import {BrowserRouter as Router , Route , Routes} from "react-router-dom"
import ViewCart from './User/Components/ViewCart';
import Dashboard from './User/Container/Dashboard';
import { db,auth } from './User/db';
import { collection, getDocs } from 'firebase/firestore';
import PreProduct from './User/Container/PreProduct';
import { Footer } from './User/Components/Footer';
import Register from './User/Components/Register';
import HH from './User/Components/HH';
import Login from './User/Components/Login';
function App() {
  //fetch page
  const [pages ,setPages] = useState([])
  const pageRef = collection(db,"Pages")
  const fetchPage = async() =>{
await getDocs(pageRef)
.then((snapshot) => {
  const newData = snapshot.docs
  .map((doc) => ({...doc.data() , id: doc.id}))
  setPages(newData)
})
  }
  //End Fetch Page

  //Fetch Title
  const titleRef = collection(db,"Title")
  const fetchTitle = async() =>{
await getDocs(titleRef)
.then((snapshot) => {
  const newData = snapshot.docs
  .map((doc) => ({...doc.data()}))
document.title = newData[0].Title
})
  }
  //End Fetch Title

//Fetch Fevicon
const changeFavicon = async(src) => {
  const feviconRef = collection(db,"Fevicon")
  await getDocs(feviconRef)
.then((snapshot) => {
  const newData = snapshot.docs
  .map((doc) => ({...doc.data()}))
 const src = newData[0].Src
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = src;
})
}
//End Fetch Fevicon

  useEffect(()=>{
    fetchPage()
    fetchTitle()
    changeFavicon()
  },[])
// const [user , setUser] = useState({
//   Username : ""
// })
// useEffect(()=>{
//   auth.onAuthStateChanged((user)=>{
// if(user){
//   setUser({
//     Username : user.displayName
//   })
// }
//   })
// },[])
  return (
    <div className="App">
     <Header/>
     <Routes>
    {pages[0]?.Display&& <Route exact id={pages[0]?.Path} path={pages[0]?.Path} element={<Home />}  />}
    {/* {pages[1]?.Display&& <Route exact id={pages[1]?.Path} path={pages[1]?.Path} element={<Services />}  />} */}
    {pages[2]?.Display&& <Route exact id={pages[2]?.Path} path={pages[2]?.Path} element={<Cart />}  />}
    {pages[3]?.Display&& <Route exact id={pages[3]?.Path} path={pages[3]?.Path} element={<ViewCart />}  />}
    {pages[4]?.Display&& <Route exact id={pages[4]?.Path} path={pages[4]?.Path} element={<Contact />}  />}
     {/* <Route exact id="services" path="services" element={<Services/>}  />
     <Route exact  path="products" element={<Cart  />}  />
     <Route exact path="contact" element={<Contact/>}></Route>
     <Route path='cart' element={<ViewCart/>}></Route> */}
     <Route  path='*' >
     </Route>
     <Route  path='profile' element={<Dashboard/>}></Route>
     <Route path='viewproduct' element={<PreProduct/>}></Route>
     </Routes> 
     <Footer/>
    </div>
/* <>
<Routes>
  <Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
<Route path='/' element={<HH User={user}/>}></Route>
  </Route>
</Routes>
    </> */
  )
}

export default App;
