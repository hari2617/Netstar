import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

const Movies = () => {


    const [movies, setMovies] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGNjMzVjNzIwZmQ0YzI2YTRlOTE0ODcyZTg5ODA4OSIsIm5iZiI6MTc1Njk4OTMxNy44MjMsInN1YiI6IjY4Yjk4Nzg1NzRjNWUwMzY4MTliZjQ1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TNCBpyJf2HAp7UIYG8_7qtj9l8XFIz54yhmfQpIcgRk'
        }
    };

    useEffect(() => {

        const fetchMovies = async () => {

            const list = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options);

            const data = await list.json();


            setMovies(data.results)

        }

        fetchMovies();
    }, [])

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

export default Movies