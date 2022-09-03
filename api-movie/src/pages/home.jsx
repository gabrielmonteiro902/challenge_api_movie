import { useState, useEffect } from "react"
import movie from "../pages/movie"
import search from "./search";
import MovieCards from "../components/MoviesCards";
import '../pages/MovieGrid.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const home = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async(url) =>{
        const res = await fetch(url)
        const data = await res.json();
        
        setTopMovies(data.results);

    };

    useEffect(() => {

   const topRatedUrl = `${moviesURL}top_rated?${apiKey}`

 getTopRatedMovies(topRatedUrl);

    },[]);

    return (
        <div className="Libmovie">
            <h2 className="title">Best Movies</h2>
            <div className="container-movies">
                {topMovies.length === 0 && <p className="Loading">Loading...</p> }
                {topMovies.length > 0 &&
            topMovies.map((movie) => <MovieCards key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export default home