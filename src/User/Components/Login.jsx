import React from 'react'
import { useState } from 'react'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { db , auth } from '../db'

const Login = () => {
    const navigate = useNavigate()
    const [user,setUser] = useState({
        Email : "",
        Password : ""
    })
    const[errorMsg , setErrorMsg] = useState("")
    const handleChange = (e) => {
 let name = e.target.name
 let value = e.target.value
 setUser((prev)=>({...prev , [name] : value}))
}

const handleSubmit = (e) => {
    e.preventDefault()
if(!user.Email || !user.Password){
 setErrorMsg("Enter All Required Fields!!!")
}
setErrorMsg("")
signInWithEmailAndPassword(auth,user.Email,user.Password)
.then((res)=>{
    console.log(res); 
    navigate("/")
  })
.catch((res)=>{setErrorMsg(res.message);console.log(res);})
}

  return (
    <>
    <div className="bg-purple-500 w-screen h-screen flex justify-center items-center">
       <div className="flex flex-col bg-white w-1/3 h-auto items-center rounded-lg">
       <h1 className='mb-3 mt-5  text-4xl font-medium '>Login</h1>
       <label htmlFor="Email" className=' text-gray-800 text-medium my-1'>Email : </label>
       <input type="email" name="Email" className='border-2 h-8 sm:h-12 border-gray-300 w-4/5  rounded-lg my-2 ' value={user.Email} onChange={handleChange} required />
       <label htmlFor="Password" className=' text-gray-800 text-medium my-1'>Password : </label>
       <input type="password" name="Password" className='border-2 h-8 sm:h-12 border-gray-300 w-4/5  rounded-lg my-2' value={user.Password} onChange={handleChange} required />
       <b className='text-red-500'>{errorMsg}</b>
       <button className="text-2xl bg-purple-400 text-white w-4/5 rounded-lg p-3  hover:bg-purple-700 my-2" onClick={handleSubmit} >Login</button>
       <b className='mb-3 tex'>Don't Have Account? <Link to="/register"><span className='text-purple-500'>Register Now</span></Link></b>
       </div>
    </div>
  </>
  )
}

export default Login