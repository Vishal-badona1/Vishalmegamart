import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { db, auth } from "../db"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [detail, setDetail] = useState({
    Name: "",
    Email: "",
    Password: ""
  })
  const [errorMsg, setErrorMsg] = useState("")
  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setDetail((pre) => ({ ...pre, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!detail.Name || !detail.Email || !detail.Password) {
      setErrorMsg("Enter All Required Fields!!!!")
    }
    setErrorMsg("")
    createUserWithEmailAndPassword(auth, detail.Email, detail.Password)
      .then(async (res) => {
        const user = res.user
        await updateProfile(user, {
          displayName: detail.Name
        })
        console.log(res);
        navigate("/login")
      }).catch((res) => setErrorMsg(res.message))
  }
  return (
    <>
      <div className="bg-purple-500 w-screen h-screen flex justify-center items-center">
        <div className="bg-white h-auto w-1/3 rounded-lg  ">
          <div className=" w-fit flex justify-center items-center flex-col">
            <h1 className='my-5 text-4xl font-medium'>Register Now</h1>
            <label htmlFor="Name" className=' text-gray-800 text-medium'>Name: </label><br />
            <input name='Name' type="text" className='border-2  sm:h-12 border-gray-300 w-4/5  rounded-lg ' value={detail.Name} onChange={handleChange} required /><br />
            <label htmlFor="Email" className=' text-gray-800 text-medium'>Email: </label><br />
            <input name='Email' type="email" className='border-2 h-8 sm:h-12 border-gray-300 w-4/5  rounded-lg ' value={detail.Email} onChange={handleChange} required /><br />
            <label htmlFor="Password" className=' text-gray-800 text-medium'>Password: </label><br />
            <input name='Password' type="password" className='border-2 h-8 sm:h-12 border-gray-300 w-4/5  rounded-lg ' value={detail.Password} onChange={handleChange} required /><br />
            <b className='text-red-500 mb-2'>{errorMsg}</b>
            <button className='text-2xl bg-purple-400 text-white w-4/5 rounded-lg p-3  hover:bg-purple-700 ' onClick={handleSubmit}>Register</button>

            <b className='justify-self-center my-5'>Already Have Account? <Link to="/login"><span className='text-purple-500'>Login</span></Link></b>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register