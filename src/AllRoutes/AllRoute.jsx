import { Route, Routes } from "react-router-dom";
import { MovieDetails ,Movies ,Search ,PageNotFound } from "../pages";


export const AllRoute =()=>{

    return(
        <Routes>
            <Route path="/" element={<Movies/>}/>
            <Route path="movie/:id" element={<MovieDetails/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}

export default AllRoute