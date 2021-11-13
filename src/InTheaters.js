import React from 'react'
import {Link} from 'react-router-dom'

const InTheaters = ({movie}) => {
    return (
        <div className='theater-container'>
            <img src={movie.image} style={{width:'80%'}}></img>
            <h3 style={{color:"white", margin:"1rem 0 0.5rem"}}>
            <Link to={`/details/${movie.id}`}>{movie.title}</Link>
            </h3>
            <p style={{color:"white"}}>{movie.genres}</p>
            <p style={{color:"white"}}>{movie.runtimeStr}</p>
        </div>
    )
}

export default InTheaters
