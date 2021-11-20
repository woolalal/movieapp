import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Container, Nav} from 'react-bootstrap'
import Popcorn from './images/popcorn.png';

const Navbars = () => {
    return (
        // <div className='navbar-container'>
        //     <Link to={`/`}><img src={Popcorn} className='logo-img'></img></Link> 
        //     <ul className='navbar-list'>
        //         <li>
        //         {/* <img src={Popcorn} className='logo-img' style={{float:'left'}}></img> */}
        //         </li>
        //         <li>
        //         <Link to={`/movies`}>Movies</Link>
        //         </li>
        //         <li>Series</li>
        //         <li>Actors</li>
        //     </ul>
        // </div>
        <div style={{backgroundColor:'black'}}>
            <Navbar>
                <Container>
                <Navbar.Brand style={{color:'white', fontFamily:'Archivo, sans-serif', fontSize:'2rem'}}>
                    <img
                    alt=""
                    src={Popcorn}
                    width="30"
                    height="45"
                    className="d-inline-block align-top"
                    />{' '}
                <span style={{color:'#00c4ff'}}>Pop</span><span style={{color:'#ff983d'}}>corn</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" style={{color:'white', fontFamily:'Montserrat, sans-serif', margin:'0 1rem'}}>Movies</Nav.Link>
                    <Nav.Link href="#link" style={{color:'white', fontFamily:'Montserrat, sans-serif'}}>Link</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbars
