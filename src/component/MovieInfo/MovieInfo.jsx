import React, { useState } from "react";

const MovieInfo = ({ movies, match }) => {
    // const [movieInfo, setMovieInfo] = useState({});
    const movieInfo = movies.find((m) => m.id == match.params.id);
    // double egalité pas triple, car m.id est number et match.params.id est string
    // console.log("this is the match object:", match);
    // console.log(movies);
    // console.log(movieInfo);
    return (
        <div>
            <h1>
                {movieInfo.title}({movieInfo.year})
            </h1>
            <iframe
                width={600}
                height={335}
                src={movieInfo.trailerUrl}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            <h5>Director: {movieInfo.director}</h5>
            <div className="description">{movieInfo.description}</div>
        </div>
    );
};

export default MovieInfo;
