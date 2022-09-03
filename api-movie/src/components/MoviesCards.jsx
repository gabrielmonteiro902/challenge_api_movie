import React from 'react'
import { Link } from "react-router-dom"
import { AiTwotoneStar } from 'react-icons/ai' 

const imageURL = import.meta.env.VITE_IMG; 


const MovieCards = ({movie, showLink = true}) => {
    return (
        <div className="movie-card">
            <img src={imageURL + movie.poster_path} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <p>
                <AiTwotoneStar /> {movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
        </div>
    )
}

export default MovieCards;