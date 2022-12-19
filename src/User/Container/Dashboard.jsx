import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const Dashboard = () => {
    
const { user, isAuthenticated, isLoading } = useAuth0();


  return (
    <>
    {isAuthenticated? 
    <div className="bg-green-200 py-32 px-10 min-h-screen ">
  <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">

    <form action="">

      <div className="flex items-center mb-5">
        <label for="name" className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Name</label>
        <input type="text" id="name" name="name" placeholder="Name" value={user.name}
               className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
      </div>

      <div className="flex items-center mb-5">
        <label for="Username" className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">User-Name</label>
        <input type="text" id="Username" name="Username" placeholder="Username" 
        value={user.nickname}
               className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
      </div>
      <div className="flex items-center mb-5">
        <label for="email" className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Email</label>
        <input type="email" id="email" name="email" placeholder="email" 
        value={user.email}
               className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
      </div>


      <div className="flex items-center mb-5">
        <label for="Image" className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Image</label>
        <input type="url " id="Image" name="Image" placeholder="Image" 
        value={user.picture}
               className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                                       <img
    src={user.picture}
    class="rounded-full w-12 mb-4 mx-auto"
    alt="Avatar"
  />
      </div>


      <div className="text-right">
        <button className="py-3 px-8 bg-green-400 text-white font-bold">Submit</button> 
      </div>

    </form>
  </div>
</div>
:""}
</>
  )
}

export default Dashboard