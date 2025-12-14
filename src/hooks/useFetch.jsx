import React, { useEffect,useState } from 'react'
import {BarearToken} from '../utils/BarearToken';

const useFetch = (link,query="") => {


     const [movies, setMovies] = useState([]);
    
        
    
        useEffect(() => {
    
            const fetchMovies = async () => {
              const qlink=link+query;
                console.log(qlink)
                const list = await fetch(link);
              
                const data = await list.json();
                setMovies(data.data)
                console.log(data.data)
            }
    
            fetchMovies();
        }, [link]);
    


  return{
    movies
  } 
}

export default useFetch