import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
import SimilarMovies from './SimilarMovies';
import NavBar from './Navbar';
import Footer from './Footer';


const MovieDetail = () => {

    const {id} = useParams();
    const [details, setDetails] = useState([]);
    const [show, setShow] = useState(false);
    const [trailer, setTrailer] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getDetails();
    }, [id]);

    async function getDetails(){
        const res = await fetch(`https://imdb-api.com/en/API/Title/k_ol79wlj8/${id}/FullActor,Posters`);
        const data = await res.json();
        setDetails(data);
        console.log(data);
        // getTrailer();
    }

    const getTrailer = async () => {
        const res = await fetch(`https://imdb-api.com/en/API/Trailer/k_ol79wlj8/${id}`);
        const data = await res.json();
        setTrailer(data.linkEmbed);
    }

    return (
        <div>
            <NavBar />
            <div style={{padding:'3%', backgroundColor:'#454545'}}>
            <div className="details-container">
            <div style={{display:'grid', gridTemplateColumns:'40% 1fr', gridGap:'1.5rem', margin:'1rem', textAlign:'center', color:'white'}}>
                {/* <h3 style={{marginBottom:"1rem"}}>Movie Details</h3> */}
                <div>
                    <img src={details.image} className="movie-image" style={{borderRadius:'6px'}}></img>
                </div>
                <div>
                    <h5>{details.fullTitle}</h5>
                    <div style={{display:'flex', margin:'2rem 1rem 0', justifyContent:'space-between'}}>
                    <p><span style={{color:'#00c4ff'}}>Ratings:</span> {details.imDbRating}</p>
                    <p><span style={{color:'#00c4ff'}}>Released on:</span> {details.releaseDate}</p>
                    <p><span style={{color:'#00c4ff'}}>Duration:</span> {details.runtimeMins} mins</p>
                    </div>
                    <h5 style={{color:'#00c4ff'}}>Overview</h5>
                    <p>{details.plot}</p>
                    <h5><span style={{color:'#00c4ff'}}>Directed By:</span> {details.directors}</h5>
                    <h5>Starring: {
                        details.starList?.map(star => (
                            <h5 style={{margin:"0.5rem"}}>
                            <Link to={`/actors/${star.name}`}>{star.name}</Link>
                            </h5>
                        ))
                    }</h5>
                
                    <Button variant='primary' onClick={handleShow}>
                        View Trailer
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Watch Trailer</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <iframe src={trailer} style={{width:"100%", height:'50vh'}}></iframe>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            <hr style={{width:'50%', color:'#ff983d', margin:'3rem auto', border:'1.5px solid'}}></hr>
                <h3 style={{textAlign:"center", margin:"2rem", color:'#FFF'}}>Similar Movies</h3>
                <div className="similarmovies-container">
                    {details.similars?.map((similar, index) => (
                        index < 3 && 
                        <SimilarMovies key={similar.id} similar={similar}/>                   
                    ))}
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default MovieDetail
