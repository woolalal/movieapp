import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Modal, Button, Card, Row, Col} from 'react-bootstrap'

const InTheaters = ({movie}) => {
    const [show, setShow] = useState(false);

    return (
        // <div className='theater-container'>
        //     <img src={movie.image} style={{width:'80%'}}></img>
        //     <h3>
        //     <Link to={`/details/${movie.id}`}>{movie.title}</Link>
        //     </h3>
        //     <p>{movie.genres}</p>
        //     <p>{movie.runtimeStr}</p>
        // </div>
        <div>
            <Card style={{ width: '15rem', backgroundColor:'#262525', color:'#FFF'}} className='movie-card'>
            <Card.Text style={{position:'relative', transform:'translate(85px,19.5rem)', color:'#ff983d'}}>
            {movie.imDbRating}
            </Card.Text>
            <Card.Img variant="top" src={movie.image} className='movieimage-card'/>
            <Card.Body>
                <Card.Title>
                {movie.title}
                </Card.Title>
                {/* <Card.Text>
                {movie.runtimeStr}
                </Card.Text>
                <Card.Text>
                {movie.releaseState}
                </Card.Text> */}
                {/* <div className="poster-overlay">
                    <p>Hello</p>
                </div> */}
                <Button variant="primary" style={{backgroundColor:'#00c4ff', border:'#00c4ff'}}>
                <Link to={`/details/${movie.id}`}>Find out more</Link>
                </Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default InTheaters
