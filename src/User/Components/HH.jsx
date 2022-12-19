import { User } from '@auth0/auth0-react'
import {getAuth, signOut } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import { db } from '../db'
const HH = (props) => {
    const Signout = () => {
        const auth = getAuth()
signOut(auth).then((res)=>{
    console.log(res);
}).catch((err)=>console.log(err))
    }
    const Username = props.User.Username
  return (
<>
{!Username && <> <Link to="/register" ><button className='bg-purple-500 text-white text-2xl p-3 rounded-lg'> Register Now</button></Link> <Link to="/login" ><button className='bg-purple-500 text-white text-2xl p-3 rounded-lg'> Login Now</button></Link></>}
{Username && <><h1>Welcome {Username}</h1> <button onClick={Signout}>Sign Out</button></> }
</>
  )
}

export default HH