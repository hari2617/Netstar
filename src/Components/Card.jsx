import React from 'react'
import { Link } from 'react-router';

const Card = ({ movie }) => {


    const { title_japanese, synopsis, } = movie
    const poster_path=movie.images.webp.large_image_url

    const img = poster_path ? poster_path : "https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";




    return (
        <Link to={`movie/${movie.mal_id}`}>
        <div>


            <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg h-[440px] w-[390px]" src={img} alt="" />
                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">{title_japanese}</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-1">{synopsis}</p>

                </div>
            </div>
        </div>

        </Link>
    )
}

export default Card