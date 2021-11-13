import React from 'react'
import {Link} from 'react-router-dom'
import Popcorn from './images/popcorn.png';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <Link to={`/`}><img src={Popcorn} className='logo-img'></img></Link> 
            <ul className='navbar-list'>
                <li>
                {/* <img src={Popcorn} className='logo-img' style={{float:'left'}}></img> */}
                </li>
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
