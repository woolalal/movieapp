import './App.css';
import React, {useState, useEffect} from 'react';
import Home from './Home';
import Movies from './Movies';
import MovieDetail from './MovieDetail';
import ActorDetail from './ActorDetail';
import LandingPage from './LandingPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movieapp" element={<LandingPage />} />
        <Route path="/movies" element={<Home/>}/>
        <Route path="/details/:id" element={<MovieDetail/>} />
        <Route path="/actors/:name" element={<ActorDetail/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
