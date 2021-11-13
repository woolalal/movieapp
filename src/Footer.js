import React from 'react'
import Popcorn from './images/popcorn.png'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer-container'>
            <img src={Popcorn} className='footer-logo'></img>
            <a href=""><i className="fab fa-twitter footer-icon"></i></a>
            <a href=""><i className="fab fa-facebook footer-icon"></i></a>
            <a href=""><i className="fab fa-instagram footer-icon"></i></a>
            <a href=""><i className="fas fa-envelope footer-icon"></i></a>
            <p className='footer-text'>© Copyright 2021 Popcorn</p>
        </div>
    )
}

export default Footer
