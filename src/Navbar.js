import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <ul className='navbar-list'>
                <li>
                <Link to={`/movies`}>Movies</Link>
                </li>
                <li>Series</li>
                <li>Actors</li>
            </ul>
        </div>
    )
}

export default Navbar
