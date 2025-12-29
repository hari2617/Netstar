import React, { useEffect }  from 'react'
import Card from '../Components/Card'

import useFetch from '../hooks/useFetch';



const ListMovie = ({api,title}) => {


   
    const {movies}=useFetch(api)


 useEffect(()=>{
    document.title=`${title}/Netstar`;
 })
    
      
    
    console.log(movies)


    return (
        <main>
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

export default ListMovie;