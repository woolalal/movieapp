import React from 'react'
import {Link} from 'react-router-dom'

const SimilarMovies = ({similar}) => {
    return (
        <div className="similarmovies">
            <img src={similar.image} className="movie-image"></img>
            <h5>
            <Link to={`/details/${similar.id}`}>{similar.fullTitle}</Link>
            </h5>
            <h5>Rating: {similar.imDbRating}</h5>
            <h5>Starring: {similar.stars}</h5>
            <h5>Plot: {similar.plot}</h5>
        </div>
    )
}

export default SimilarMovies
