import React,{ useEffect,useState} from 'react'

const ItemHome = (props) => {
    const apii = props.api
    const [data,setData]=useState([])
    const api = `https://api.unsplash.com/search/photos?page=2&query=${apii}&client_id=${process.env.REACT_APP_KEY}`;
    const fetchProduct = async() =>{
      const data = await fetch(api)
      const response = await data.json()
      setData(response.results)
    }
   
    useEffect(()=>{fetchProduct()},[])
    //Search Logics
    const query = props.search
    const vv =  data.filter((user)=>user.alt_description.toLowerCase().includes(query))
    //End OF Search Logic
  return (
   <>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-1 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <div className="flex justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{apii}</h2>
</div>    
<div>
     {apii.length!==0?   <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {vv.length===0?<h1 className='text-4xl w-full'>No Data Found</h1>:vv.map((e) => {
              const { alt_description ,description,likes,id } = e
              const {full} = e.urls
              return(
                <div className="relative">
            <div key={id} className=" group relative" 
            //  onClick={()=>setProduct({
            //         Name : Name,
            //         Image : Image,
            //         Price : Price,
            //         Description : Description,
            //         Display : true
            //       })}
                  >
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md  group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={full}
                  alt={description}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full border-2 border-black-500 "
                />
                {/* <p className="text-sm font-medium text-white  absolute top-0  text-xl ">₹{likes}</p> */}
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a className="text-black font-medium">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {alt_description?alt_description.substring(0,15).toUpperCase():"...."}
                    </a>
                    <br />
                    <span className='my-5'>{description?alt_description.substring(0,35):"...."}</span>

                  </h3>
                 </div>
              </div>
            </div>
              <button className='w-full h-auto text-lg p-3 bg-gray-200 rounded-lg mt-3 hover:bg-red-500 hover:text-white'
    //           onClick={() => {
    //     handleSubmit(Name,Price,Image)
    //   }}
       >Add To Bag</button>
              
            </div>
          )})}
        </div>:<>
        <img src='https://images.unsplash.com/photo-1534703580202-6123d4189ef6?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjk0MzJ8MHwxfHNlYXJjaHw1fHxibHVyJTIwJTIwZGVsaXZlcnl8ZW58MHx8fHwxNjcxNTUzOTkw&ixlib=rb-4.0.3&q=80' className='w-screen h-screen'/> 
        
        </>}
    </div>
      </div>
    </div>
   </>
  )
}

export default ItemHome