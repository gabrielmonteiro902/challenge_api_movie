import {useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import "../pages/movies.css"
import MovieCards from "../components/MoviesCards"; 
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const movie = ()=>{
  const {id} = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async(url) =>{
    const res = await fetch(url)
        const data = await res.json();
        
        setMovie(data);
  } 
  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"

    })
  } 
useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`
    getMovie(movieURL);
}, [])

    return(
        <div className="movie-page"> 
            {movie && (
            <>
            <MovieCards movie={movie} showLink={false}/>
            <p className="tagline">{movie.tagline}</p>
            <div className="info">
                <h3>
                    <BsWallet2/> Budget
                </h3>
                <p>{formatCurrency(movie.budget )}</p>
            </div>
            <div className="info">
                <h3>
                    <BsGraphUp/> Invoicing
                </h3>
                <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className="info">
                <h3>
                    <BsHourglassSplit/> Duration
                </h3>
                <p>{movie.runtime} Minutes</p>
            </div>
            <div className="info-description">
                <h3>
                    <BsFillFileEarmarkTextFill/> Description
                </h3>
                <p>{movie.overview}</p>
            </div>
            </>
          )}
        </div>
    );
}

export default movie