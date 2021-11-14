import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
import SimilarMovies from './SimilarMovies';
import NavBar from './Navbar';


const MovieDetail = () => {

    const {id} = useParams();
    const [details, setDetails] = useState([]);
    const [show, setShow] = useState(false);
    const [trailer, setTrailer] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        // getDetails();
    }, [id]);

    async function getDetails(){
        const res = await fetch(`https://imdb-api.com/en/API/Title/k_ol79wlj8/${id}/FullActor,Posters`);
        const data = await res.json();
        setDetails(data);
        // console.log(data);
        getTrailer();
    }

    const getTrailer = async () => {
        const res = await fetch(`https://imdb-api.com/en/API/Trailer/k_ol79wlj8/${id}`);
        const data = await res.json();
        setTrailer(data.linkEmbed);
    }

    return (
        <div className="moviedetails">
            <NavBar />
            <div className="details-container">
                <h3 style={{marginBottom:"1rem"}}>Movie Details</h3>
                <img src={details.image} className="movie-image"></img>
                <h5>Title: {details.fullTitle}</h5>
                <h5>Ratings: {details.imDbRating}</h5>
                <h5>Release Date: {details.releaseDate}</h5>
                <h5>Duration: {details.runtimeMins}</h5>
                <h5>Directed By: {details.directors}</h5>
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
            <h3 style={{textAlign:"center", margin:"1.5rem"}}>Similar Movies</h3>
            <div className="similarmovies-container">
                {details.similars?.map((similar, index) => (
                    index < 3 && 
                    <SimilarMovies key={similar.id} similar={similar}/>                   
                ))}
            </div>
        </div>
    )
}

export default MovieDetail
