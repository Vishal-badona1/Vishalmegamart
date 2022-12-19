import React, { useEffect, useState } from 'react'
import { Gallery } from '../Container/Gallery'
import { FcNext } from "@react-icons/all-files/fc/FcNext";
import { FcPrevious } from "@react-icons/all-files/fc/FcPrevious";
import { Loading } from './Loading';
import { NA } from '../Container/NA';
import { useSelector } from 'react-redux';
export const Services = (props) => {
    // const search = useSelector(state => state.search.value)
     const [post , setPost] = useState("Flower")
    const [Data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const getgallery = async () => {
        const api = `https://api.unsplash.com/search/photos?page=${page}&query=${post}&client_id=${process.env.REACT_APP_KEY}`
        setLoading(true)
        const data = await fetch(api);
        const response = await data.json()
        setData(response.results)
        setLoading(false)
    }

    
    useEffect(() => {
        getgallery()
    }, [])
    const style = {
        backgroundColor: "white",
        fontSize: "30px",
        border: "1px solid red",
    }

    const handlePrevious = async () => {
        setLoading(true)
        if (page > 1) {
            setPage(page - 1)
        }
        await getgallery()
        setLoading(false)
    }
    const handleNext = async () => {
        setLoading(true)
        if (page < 6) {
            setPage(page + 1)
        }
        else {
            setPage(1)
        }
        await getgallery()
        setLoading(false)
    }
    const sendd = (e) => {
      setPost(e.target.value);
    }
    const Searchh = async() => {
        const api = `https://api.unsplash.com/search/photos?page=${page}&query=${post}&client_id=${process.env.REACT_APP_KEY}`
        setLoading(true)
        const data = await fetch(api);
        const response = await data.json()
        setData(response.results)
        setLoading(false)
    }

    return (
        <>

            <div className="flex justify-center flex-wrap mx-1  ">
                <button style={style} className='flex-wrap justify-between py-3 px-3 text-white hover:bg-red-700 text-white' disabled={page < 1} onClick={handlePrevious}><FcPrevious /></button>
                <div className='flex rounded-lg'>
                    <h1 className='text-center p-2 bg-white border-2 px-3 text-black-400 mx-1  text-lg rounded-lg'>{page}</h1>
                    <input type="text" className='border-2 bg-white rounded-lg ' onChange={sendd} />
                    <button className='text-center p-2 bg-white border-2 px-3 text-black-400 text-2xl border-black hover:text-red-500 hover:border-red-500 rounded-lg mx-1' type='submit'onClick={Searchh} onSubmit={getgallery}>Search</button>
                </div>
                <button style={style} className='flex justify-between py-3 px-3 text-white  hover:bg-sky-700 text-white' onClick={handleNext}>
                    <FcNext />
                </button>
            </div>

            {loading ? <Loading /> : <Gallery exact data={Data} />}
            {Data.length !== 0 ? "" : <NA />}

        </>
    )
}
