import React, { Fragment, useState } from "react";
// import nextId from "react-id-generator";
// import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap"
import AddMovie from "./component/AddMovie/AddMovie";
import "./App.css";
import NavigationBar from "./component/navbar/NavigationBar";
import MovieList from "./component/movieList/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MovieInfo from "./component/MovieInfo/MovieInfo";

function App() {
    let [searchTerm, SetSearchTerm] = useState("");
    let [rateSearch, SetRateSearch] = useState(0);
    let [movies, setMovies] = useState([
        {
            id: 0,
            title: "Titanic",
            description:
                "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
            posterUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
            rate: 2,
            trailerUrl: "https://www.youtube.com/embed/kVrqfYjkTdQ",
            year: 1997,
            director: "James Cameron",
        },
        {
            id: 1,
            title: "The Shawshank Redemption",
            description:
                "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            posterUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm",
            rate: 2,
            trailerUrl: "https://www.youtube.com/embed/P9mwtI82k6E",
            year: 1994,
            director: "Frank Darabont",
        },
        {
            id: 2,
            title: "The Godfather",
            description:
                "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
            rate: 4,
            trailerUrl: "https://www.youtube.com/embed/kTlhEX0kmL8",
            year: 1972,
            director: "Francis Ford Coppola",
        },
        {
            id: 3,
            title: "The Dark Knight",
            description:
                "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
            rate: 5,
            trailerUrl: "https://www.youtube.com/embed/TQfATDZY5Y4",
            year: 2008,
            director: "Christopher Nolan",
        },
        {
            id: 4,
            title: "12 Angry Men",
            description:
                "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
            rate: 1,
            trailerUrl: "https://www.youtube.com/embed/_13J_9B5jEk",
            year: 1957,
            director: "Sidney Lumet",
        },
        {
            id: 5,
            title: "Schindler's List",
            description:
                "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
            rate: 3,
            trailerUrl: "https://www.youtube.com/embed/mxphAlJID9U",
            year: 1993,
            director: "Steven Spielberg",
        },
        {
            id: 6,
            title: "Pulp Fiction",
            description:
                "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            posterUrl: "https://www.miramax.com/media/assets/Pulp-Fiction1.png",
            rate: 5,
            trailerUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY",
            year: 1994,
            director: "Quentin Tarantino",
        },
        {
            id: 7,
            title: "The Lord of the Rings: The Return of the King",
            description:
                "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
            rate: 5,
            trailerUrl: "https://www.youtube.com/embed/KOQSQaGgJxs",
            year: 2003,
            director: "Peter Jackson",
        },
    ]);
    const getTerm = (term) => {
        SetSearchTerm(term);
    };
    const getRate = (rating) => {
        SetRateSearch(rating);
    };
    const getInput = (newmovie) => {
        setMovies([...movies, newmovie]);
    };
    console.log(rateSearch);
    // console.log(newMovie)
    return (
        <div className="App">
            <NavigationBar
                className="nav"
                movies={movies}
                getTerm={getTerm}
                getRate={getRate}
            />
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => (
                        <Fragment>
                            <MovieList
                                className="list"
                                movies={movies}
                                searchTerm={searchTerm}
                                rateSearch={rateSearch}
                            />
                            <AddMovie className="add-btn" getInput={getInput} />
                        </Fragment>
                    )}
                />

                <Route
                    path={"/:id"}
                    render={({ match }) => (
                        <MovieInfo movies={movies} match={match} />
                    )}
                />
            </Switch>
        </div>
    );
}
// const Home =()=>{
//   return (
//     <h1>Home</h1>
//   )
// }
export default App;
