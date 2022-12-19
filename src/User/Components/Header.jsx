import React, { useState, useEffect } from 'react'
import Logo from "../images/Logo.png"
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { db } from '../db';
import { collection, getDocs } from 'firebase/firestore';

export const Header = () => {
  const { loginWithRedirect, logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  const [drop, setDrop] = useState(false)
  const Drop = () => {
    if (drop === true) {
      setDrop(false)
    }
    else {
      setDrop(true)
    }
  }

  //fetch Pages
  const [Logo, setLogo] = useState("")
  const [pages, setPages] = useState([])
  const fetchLogo = async () => {
    const LogoRef = collection(db, "Logo")
    await getDocs(LogoRef)
    .then((snapshot) => {
      const newData = snapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
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
console.log(Logo);
  useEffect(() => {
    fetchPage()
    fetchLogo()
  }, [])
  return (
    <>

      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mx-auto sm:mx-0 " >
              <img src={Logo} className='w-32' alt="" />
              {/* <span className="ml-3 text-xl">E-Flip</span> */}
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
              {pages[0]?.Display && <Link className="mr-5 hover:text-gray-900" to={pages[0]?.Path}>{pages[0]?.Page}</Link>}
              {pages[1]?.Display && <Link className="mr-5 hover:text-gray-900" to={pages[1]?.Path}>{pages[1]?.Page}</Link>}
              {pages[2]?.Display && <Link to={pages[2]?.Path} className="mr-5 hover:text-gray-900">{pages[2]?.Page}</Link>}
              {pages[3]?.Display && <Link to={pages[3]?.Path} className="mr-5 hover:text-gray-900">{pages[3]?.Page}</Link>}
              {pages[4]?.Display && <Link to={pages[4]?.Path} className="mr-5 hover:text-gray-900">{pages[4]?.Page}</Link>}
            </nav>
            <div className="flex mx-auto my-3 sm:my-0 sm:mx-0">
              <div className="flex items-center lg:order-2">
                {isAuthenticated ?
                  <>

                    <div className="flex-col ">
                      <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button" onClick={Drop}>
                        <span className="sr-only">Open user menu</span>
                        <img className="mr-2 w-8 h-8 rounded-full" src={user.picture} alt="user photo" />
                        {user.nickname}
                        <svg className="w-4 h-4 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </button>


                      {drop ? <>
                        <div id="dropdownAvatarName" className="absolute z-40 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                          <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                            <div className="font-medium ">{user.name}</div>
                            <div className="truncate">{user.email}</div>
                          </div>
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                            <li>
                              <Link to="profile" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setDrop(false)}>Dashboard</Link>
                            </li>
                            <li>
                              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                          </ul>
                          <div className="py-1">
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={() => logout()}>Sign out</a>
                          </div>
                        </div></> : ""}</div>
                  </> :
                  <Link ><button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => loginWithRedirect()}>Log In</button></Link>
                }
              </div>
            </div>

          </div>

        </nav>
      </header>
    </>
  )
}
