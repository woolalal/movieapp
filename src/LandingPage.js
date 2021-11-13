import React, {useState, useEffect} from 'react'
import Typed from 'typed.js';
import Navbar from './Navbar';
import InTheaters from './InTheaters';
import Footer from './Footer';
import {Carousel} from 'react-bootstrap';

const LandingPage = () => {
    const el = React.useRef(null);
    const typed = React.useRef(null);
    const [movies, setMovies] = useState([]);
    const [boxOffice, setBoxOffice] = useState([]);

    // React.useEffect(() => {
    //     const options = {
    //         strings: [
    //             'Welcome to Popcorn', 
    //             'Looking for the latest reviews for your shows?',
    //             'Searching for details on an actor?',
    //             'All these information now just a click away.',
    //             'Enjoy your search!'
    //         ],
    //         typeSpeed: 110,
    //         backSpeed: 90,
    //         loop: true,
    //     }
    //     typed.current = new Typed(el.current, options);
    // }, [])

    useEffect(() => {
        // getMovies();
        // topBoxOffice();
    }, [])

    async function getMovies(){
        const res = await fetch(`https://imdb-api.com/en/API/InTheaters/k_ol79wlj8`);
        const data = await res.json();
        setMovies(data.items);
    }

    const topBoxOffice = async () => {
        const res = await fetch(`https://imdb-api.com/en/API/BoxOffice/k_ol79wlj8`);
        const data = await res.json();
        setBoxOffice(data.items);
        console.log(data);
    }

    return (
        <div className='landingpage-container'>
            <Navbar />
            <div className='animation-image-container'>
                {/* <div className='text-animation'>
                <span className="typed-text" style={{ whiteSpace: 'pre' }} ref={el} />
                </div> */}
            </div>
            <h2 style={{margin:'2rem', color:'#cca01b'}}>Explore Movies & TV shows</h2>
            <div style={{padding:"0 2.5rem"}}>
                <h3>In Theaters Now</h3>
                <hr style={{width:"10%", color:"#cca01b", border:"1px solid"}}/>
            </div>
            <div className='in-theaters-container'>
                {movies.map(movie => {
                    return <InTheaters key={movie.id} movie = {movie} />
                })}
            </div>
            <div style={{padding:"2rem 2.5rem"}}>
                <h3>Top Box Office</h3>
                <hr style={{width:"10%", color:"#cca01b", border:"1px solid"}}/>
            </div>
            <div style={{padding: '2% 15%'}}>
                <Carousel style={{padding: '12%', backgroundColor:'black'}}>
                {boxOffice.map(office => (
                    <Carousel.Item>
                    <img src={office.image} style={{width:'100%', textAlign:'center', height:'100vh'}}></img>
                    {/* <Carousel.Caption>
                    <h3>{office.title}</h3>
                    <p>{office.gross}</p>
                    </Carousel.Caption> */}
                    </Carousel.Item>
                ))}
                </Carousel>
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage
