import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import SimilarMovies from './SimilarMovies';


const MovieDetail = () => {

    const {id} = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        getDetails();
    }, [id]);

    async function getDetails(){
        const res = await fetch(`https://imdb-api.com/en/API/Title/k_ol79wlj8/${id}/FullActor,Posters`);
        const data = await res.json();
        setDetails(data);
        console.log(data);
    }

    return (
        <div className="moviedetails">
            <div className="details-container">
                <h3 style={{marginBottom:"1rem"}}>Movie Details</h3>
                <img src={details.image} className="movie-image"></img>
                <h5>Title: {details.fullTitle}</h5>
                <h5>Ratings: {details.imDbRating}</h5>
                <h5>Release Date: {details.releaseDate}</h5>
                <h5>Duration: {details.runtimeMins}</h5>
                <h5>Directed By: {details.directors}</h5>
                Starring: {
                    details.starList?.map(star => (
                        <h5 style={{margin:"0.5rem"}}>
                        <Link to={`/actors/${star.name}`}>{star.name}</Link>
                        </h5>
                    ))
                }
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
