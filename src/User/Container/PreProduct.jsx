
import React , {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ShowProduct } from '../Redux/Product/viewProduct';
import Productget from './Productget';
const PreProduct = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.model)
    const ddd = useSelector(state => state.disp)
   
    const [open ,setOpen] = useState(false)
const Title = data[0]
   const [products , setProducts] = useState([])
   const api = `https://api.unsplash.com/search/photos?page=1&query=${Title} Products&client_id=${process.env.REACT_APP_KEY}`;

  const fetchProduct = async() => {
    const data = await fetch(api)
    const response  = await data.json()
    setProducts(response.results)
  }
  useEffect(()=>{
    fetchProduct()
  },[])
  const [model , setModel] = useState({
    Name : "",
    Price : 0,
    Rating : 0,
    Description : "",
    Image : ""
  })

  const reset = () => {
    setModel({
        Name : "",
        Price : 0,
        Rating : 0,
        Description : "",
        Image : ""
    })
  }

  return (
   <>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also like {Title} Products </h2>

        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
           <div className='flex-col'>
            <div key={product.id} className=" group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.urls.regular}
                  alt={product.urls.thumb}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
            </div>
                 <button className='my-3 bg-blue-500 p-3 rounded-lg text-white text-center text-lg font-bold w-full' onClick={()=>{setModel({ Name : product.description,
       Price : product.width,
       Rating : product.likes,
       Description :product.alt_description ,
       Image : product.urls.full}); dispatch(ShowProduct())}}>View Product</button>
           </div>
          ))}
        </div>
      </div>
    </div>
 {ddd.Display && <Productget product={model}  reset={reset}/> }
   </>
  )
}

export default PreProduct