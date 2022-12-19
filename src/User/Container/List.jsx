import React, { useEffect, useState } from 'react'
const api = 'https://api.unsplash.com/search/photos?page=1&query=electronic%20gadgets&client_id=Qd-wfNnqMjBmixcbJt-4-lQVBS-kU72r-U2Epm4HaeA';
export const List = () => {
    const immg = "https://rukminim1.flixcart.com/fk-p-flap/464/708/image/d6f827f6b3f87db8.jpg?q=70"
   const img2 = "https://img.freepik.com/premium-vector/electronics-industry-poster-template-layout-appliance-technology-production-banner-booklet-leaflet-print-design-with-linear-icons-vector-brochure-page-layouts-magazines-advertising-flyers_106317-8103.jpg?w=2000"
    const [dataa, setData] = useState([])

    const getproduct = async () => {
        const data = await fetch(api)
        const response = await data.json()
        setData(response.results)
    }
    useEffect(() => {
        getproduct()
    }, [])

    return (
        <>
            <div className="flex mt-5 ">
                <div className="flex-none w-80 h-80 bg-orange-100">
                    <img src={img2} alt="" className='object-fill h-full w-full' />
                </div>
                <div className="flex overflow-scroll scrollbar-hide mx-2">

                    {dataa.map((element) => {
                        return (
                            <div className=" flex w-1/4  min-w-min grow h-80 overflow-hidden  justify-around " key={element.id}>

{element.alt_description ? <h1 className='w-64 h-80 mt-2 ml-5' key={element.id}>
                                    <img className="w-72 h-64" src={element.urls.full} alt="Sunset in the mountains" />
                                    {element.alt_description ? element.alt_description.slice(0, 50) : element.alt_description
                                    }
                                </h1> : " "}
                            </div>
                        )
                    })}
                </div>
                <div className="flex-none w-80 h-80 bg-orange-500">
                    <img src={immg} alt="" className='object-fill h-full w-full' />

                </div>
            </div>
        </>
    )
}
