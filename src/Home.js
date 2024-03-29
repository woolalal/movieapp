import './App.css';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import Movies from './Movies';
import Navbar from './Navbar';

const Home = () => {
    const MOVIEKEY = 'k_ol79wlj8';
    const [search, setSearch] = useState("");
    const [confirmSearch, setConfirmSearch] = useState("iron man");
    const [items, setItems] = useState([]);
    const [details, setDetails] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getData();
    }, [confirmSearch]);

    async function getData(){
        // const res = await fetch('https://calendarific.com/api/v2/languages?api_key=f93de0ff372a1112235760062f8e3e0afc97906d');
        const res = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_ol79wlj8/${confirmSearch}`);
        const data = await res.json();
        setItems(data.results);
        console.log(data.results);
    }

    const updateSearch = (evt) => {
        setSearch(evt.target.value);
    }

    const finalSearch = (evt) => {
        evt.preventDefault();
        setConfirmSearch(search);
    } 
    
    return (
        <div className="container">
            <Navbar/>
            <div className="form-container">
            <h2 className="enter-message" style={{margin: "1.5rem", fontSize: "30px", fontFamily: "Roboto, sans-serif"}}>Enter a movie name here</h2>
            <form onSubmit={finalSearch}>
                <input 
                type="text"
                // updates the search state every time input is changed.
                onChange={updateSearch} 
                // update value.
                value={search}
                className='search'>
                </input>
                <input type="submit" className="search-btn"></input>
            </form>
            </div>
            <div className="grid-movie">
            {items.map(items => (
                <Movies key={items.id} items={items}/>
            ))}
            </div>
        </div>
    )
}

export default Home
