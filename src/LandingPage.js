import React from 'react'
import Typed from 'typed.js';
import Navbar from './Navbar';

const LandingPage = () => {
    const el = React.useRef(null);
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                'Welcome to Popcorn', 
                'Looking for the latest reviews for your shows?',
                'Searching for details on an actor?',
                'All these information now just a click away.',
                'Enjoy your search!'
            ],
            typeSpeed: 80,
            backSpeed: 80,
            loop: true,
        }
        typed.current = new Typed(el.current, options);
    }, [])

    return (
        <div className='landingpage-container'>
            <Navbar />
            <div className='text-animation'>
            <span className="typed-text" style={{ whiteSpace: 'pre' }} ref={el} />
            </div>
        </div>
    )
}

export default LandingPage
