import { Route, Routes } from "react-router-dom";
import { MovieDetails ,ListMovie ,Search ,PageNotFound } from "../pages";


export const AllRoute =()=>{

    return(
        <Routes>
            <Route path="/" element={<ListMovie api="https://api.jikan.moe/v4/seasons/now?page=1" title="Home"/>}/>
            <Route path="movie/:id" element={<MovieDetails title="Movie-Details"/>}/>
            <Route path="movies/popular" element={<ListMovie api="https://api.jikan.moe/v4/top/anime?filter=bypopularity" title="Popular"/>}/>
            <Route path="movies/top" element={<ListMovie api="https://api.jikan.moe/v4/top/anime" title="Top Rated"/>}/>
            <Route path="movies/upcoming" element={<ListMovie api="https://api.jikan.moe/v4/seasons/upcoming" title="Upcoming"/>}/>
            <Route path="search" element={<Search api="https://api.jikan.moe/v4/anime?q="/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}

export default AllRoute