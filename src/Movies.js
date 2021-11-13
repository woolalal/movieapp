import React from 'react'
import {Link} from 'react-router-dom';

const Movies = ({items}) => {

    return (
        // <div className="movie-container">
        //     {items.map(item => (
        //         <h3>
        //         <Link to={`/details/${item.id}`}>{item.title}</Link>
        //         </h3>
        //     ))}
        // </div>
        <div className="movie-container">
            <img src={items.image} className="movie-image" alt="Movie Image" style={{width:'70%'}}></img>
            <h3>
                <Link to={`/details/${items.id}`}>{items.title}</Link>
            </h3>
        </div>
    )
}

export default Movies
