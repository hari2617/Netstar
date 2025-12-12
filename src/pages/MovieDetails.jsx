import React from 'react'
import { useParams } from 'react-router'

const MovieDetails = () => {
  
  
  const {id}=useParams()
    return (

    
    <main>
            {id}
    </main>
  )
}

export default MovieDetails