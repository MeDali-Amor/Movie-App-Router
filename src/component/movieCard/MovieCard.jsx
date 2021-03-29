import React from "react";
import "./movieCard.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MovieInfo from "../MovieInfo/MovieInfo";

const MovieCard = ({ movie, movies }) => {
    // console.log(match)
    return (
        <div className="card">
            <div className="container">
                <img variant="top" src={movie.posterUrl} className="image" />
                <h5 className="title">{movie.title}</h5>

                <div className="description">{movie.description}</div>
            </div>

            <div className="footer">
                {/* <Button variant="primary">
                    <Link to={`/${movie.id}`}></Link> See More</Button> */}
                <Link to={`/${movie.id}`} className="btn btn-primary">
                    See more...
                </Link>
                {"⭐".repeat(movie.rate)}
            </div>
        </div>
    );
};

export default MovieCard;
