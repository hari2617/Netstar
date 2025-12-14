import { Route, Routes } from "react-router-dom";
import { MovieDetails ,Movies ,Search ,PageNotFound } from "../pages";


export const AllRoute =()=>{

    return(
        <Routes>
            <Route path="/" element={<Movies api="https://api.jikan.moe/v4/seasons/now?page=1" title="Home"/>}/>
            <Route path="movie/:id" element={<MovieDetails title="Movie-Details"/>}/>
            <Route path="movies/popular" element={<Movies api="https://api.jikan.moe/v4/top/anime?filter=bypopularity" title="Popular"/>}/>
            <Route path="movies/top" element={<Movies api="https://api.jikan.moe/v4/top/anime" title="Top Rated"/>}/>
            <Route path="movies/upcoming" element={<Movies api="https://api.jikan.moe/v4/seasons/upcoming" title="Upcoming"/>}/>
            <Route path="search" element={<Search api="https://api.jikan.moe/v4/anime?q="/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}

export default AllRoute