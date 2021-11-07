import React from 'react'

const SimilarMovies = ({similar}) => {
    return (
        <div className="similarmovies">
            <img src={similar.image} className="movie-image"></img>
            <h5>{similar.fullTitle}</h5>
            <h5>Rating: {similar.imDbRating}</h5>
            <h5>Starring: {similar.stars}</h5>
            <h5>Plot: {similar.plot}</h5>
        </div>
    )
}

export default SimilarMovies
