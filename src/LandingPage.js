import React, {useState, useEffect} from 'react'
import Typed from 'typed.js';
import Navbars from './Navbar';
import InTheaters from './InTheaters';
import Footer from './Footer';
import {Carousel} from 'react-bootstrap';
import Spinner from './images/spinner.gif';

const LandingPage = () => {
    const el = React.useRef(null);
    const typed = React.useRef(null);
    const [movies, setMovies] = useState([]);
    const [popular, setPopular] = useState([]);
    const [boxOffice, setBoxOffice] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [optionVal, setOptionVal] = useState('intheaters');

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
        filterHandlers();
    }, [optionVal])

    const filterHandlers = () => {
        switch(optionVal){
            case 'intheaters':
                getMovies();
                break;
            case 'popular':
                getPopular();
                break;
            case 'comingsoon':
                getComing();
                break;
            default:
                getMovies();
                break;
        }
    }
    async function getMovies(){
        const res = await fetch(`https://imdb-api.com/en/API/InTheaters/k_ol79wlj8`);
        const data = await res.json();
        setMovies(data.items);
        console.log(data.items);
        setLoading(false);
    }

    const topBoxOffice = async () => {
        const res = await fetch(`https://imdb-api.com/en/API/BoxOffice/k_ol79wlj8`);
        const data = await res.json();
        setBoxOffice(data.items);
        console.log(data);
    }

    const getPopular = async () => {
        const res = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/k_ol79wlj8`);
        const data = await res.json();
        setMovies(data.items);
        console.log(data.items);
    }

    const getComing = async () => {
        const res = await fetch(`https://imdb-api.com/en/API/ComingSoon/k_ol79wlj8`);
        const data = await res.json();
        setMovies(data.items)
        console.log(data.items);
    }

    const statusHandler = (evt) => {
        setOptionVal(evt.target.value);
    }

    return (
        <div className='landingpage-container'>
            <Navbars />
            <div className='animation-image-container'>
                {/* <div className='text-animation'>
                <span className="typed-text" style={{ whiteSpace: 'pre' }} ref={el} />
                </div> */}
            </div>
            <div className="middle-container">
                <h2 style={{margin:'2rem', color:'#ff983d'}}>Explore Movies & TV shows</h2>
                <div style={{padding:"0 2.5rem"}}>
                    <h3 style={{display:'inline'}}>In Theaters Now</h3>
                    <div style={{display:'inline', float:'right'}}>
                        <span style={{marginRight:'10px', fontFamily:'Montserrat', fontSize:'20px'}}>Display By:</span>
                        <select onChange={statusHandler} style={{border:'1px solid black', borderRadius:'4px', background:'black', color:'#ff983d', width:'120px', padding:'1.5%'}}>
                            <option value="intheaters">In Theaters</option>
                            <option value="popular">Popular</option>
                            <option value="comingsoon">Upcoming</option>
                        </select>
                    </div>
                    <hr style={{width:"10%", color:"#00c4ff", border:"1.5px solid"}}/>
                </div>
                <div className='in-theaters-container'>
                    {movies.map((movie,index) => {
                        return isLoading ? <img src={Spinner} style={{width:'10%', margin:'auto'}}></img> 
                        : index < 10 && <InTheaters key={movie.id} movie = {movie} />
                    })}
                </div>
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
                    </Carousel.Item>
                ))}
                </Carousel>
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage
