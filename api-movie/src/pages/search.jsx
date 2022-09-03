import "./home"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCards from "../components/MoviesCards";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import './MovieGrid.css'

const search = ()=>{
    const [searchParams] = useSearchParams();
    
    const [topMovies, setMovies] = useState([]);
    const query = searchParams.get("q");
  
    const getSearchMovies = async(url) =>{
        const res = await fetch(url)
        const data = await res.json();
        
        setMovies(data.results);
    };

    useEffect(() => {

        const searcWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;

        getSearchMovies(searcWithQueryURL);

    },[query]);

    return (
    <div className="Libmovie">
    <h2 className="title">
        Results for <span className="query-text">{query}</span>
    </h2>
    <div className="container-movies">
        {topMovies.length === 0 && <p>Loading...</p> }
        {topMovies.length > 0 &&
    topMovies.map((movie) => <MovieCards key={movie.id} movie={movie}/>)}
    </div>
</div>
)
}

export default search