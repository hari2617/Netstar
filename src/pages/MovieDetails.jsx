import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {BarearToken} from '../utils/BarearToken'



const MovieDetails = ({title}) => {
  
  
  const {id}=useParams()
  const [data,setData]=useState({})

 
    useEffect(()=>{
        document.title=`${title}/Netstar`
    })

  useEffect(()=>{

    const fetchData =async ()=>{

        const movie=await fetch(`https://api.jikan.moe/v4/anime/${id}`,)
        const d=await movie.json()

        setData(d.data)
    }

    fetchData();

  },[id])

  //const img=data.images.webp.large_image_url
  const genres=data?.genres||[]

  console.log(data)
    return (

    
    <main>
        <section className='max-w-7xl mx-auto mt-16'>

            <div className='grid grid-cols-1 sm:grid-cols-2 '>

                <div className='w-full '>
                    <img className="h-[520px] w-[400px] mx-auto"  src={data?.images?.webp?.large_image_url || data?.images?.jpg?.large_image_url} />

                </div>
                 <div className='w-full p-4'>
                    <h1 className=' font-bold text-6xl text-blue-950'>{data.title_japanese}</h1>
                    <h4 className=' font-bold text-xl line-clamp-4 mt-4 text-indigo-900'>{data.synopsis}</h4>
                    <h6 className=' font-bold text-[25px] text-blue-950 mt-4'>Ratings: {data.score}/10</h6>

                    <div className='text-2xl mt-4'>
                    <h5 className='font-bold text-blue-950 '>Genres:</h5> 
                    {
                        genres.map((g)=>(
                            <h7 className=' font-black ml-10 text-[20px] text-indigo-900' key={g.mal_id}> {g.name} </h7>
                        ))
                    }
                 </div>
                 </div>

                 
            </div>

        </section>
    </main>
  )
}

export default MovieDetails