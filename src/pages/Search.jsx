import React from 'react'
import { useSearchParams } from 'react-router'
import useFetch from '../hooks/useFetch'
import Card from '../Components/Card'

const Search = () => {

  const [searchParams]=useSearchParams()
  const query=searchParams.get("q");
  const api=`https://api.jikan.moe/v4/anime?q=${query}`
  const {movies}=useFetch(api)


  return (


   <main>


    <section className='mt-5 font-bold text-2xl text-indigo-950'>
      {
        movies.length===0?"No results found":`Results for "${query}"`
      }
    </section>
            <section className='max-w-7xl mx-auto mt-12 mb-6 '>
                <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-3'>

                    {
                        movies.map((movie,index) => (

                            <Card key={index} movie={movie}/>

                        ))

                    }
                </div>

            </section>
        </main>
  )
}

export default Search