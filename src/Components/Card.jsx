import React from 'react'
import { Link } from 'react-router';

const Card = ({ movie }) => {


    const { original_title, overview, poster_path } = movie
    const img = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";




    return (
        <Link to={`movie/${movie.id}`}>
        <div>


            <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg h-[500px] w-[390px]" src={img} alt="" />
                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">{original_title}</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">{overview}</p>

                </div>
            </div>
        </div>

        </Link>
    )
}

export default Card