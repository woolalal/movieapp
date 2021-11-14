import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap'

const InTheaters = ({movie}) => {
    console.log(movie);
    const [show, setShow] = useState(false);
    const [trailer, setTrailer] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getTrailer = async () => {
        const res = await fetch(`https://imdb-api.com/en/API/Trailer/k_ol79wlj8/${movie.id}`)
        const data = await res.json();
        console.log(data);
    }
    // getTrailer();

    return (
        <div className='theater-container'>
            <img src={movie.image} style={{width:'80%'}}></img>
            <h3 style={{color:"white", margin:"1rem 0 0.5rem"}}>
            <Link to={`/details/${movie.id}`}>{movie.title}</Link>
            </h3>
            <p style={{color:"white"}}>{movie.genres}</p>
            <p style={{color:"white"}}>{movie.runtimeStr}</p>
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
    )
}

export default InTheaters
