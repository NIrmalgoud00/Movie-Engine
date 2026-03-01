import React, { useState } from 'react'
import type { Movie } from "../types";
// import MoviePopup from './MoviePopup';

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {

    // const [show, setShow] = useState(false);

    // const popUpFunction = () => {
    //     setShow(!show)
    // }

    return (
        <>
            <div className="col-12 col-md-6 col-lg-3" 
            // onClick={() => popUpFunction()}
            >
                <div className="card h-100 text-center p-4">
                    <img
                        src={movie.Poster}
                        alt="image"
                        className="img-fluid w-100"
                        style={{
                            aspectRatio: "16 / 9",
                            objectFit: "cover"
                        }}
                    />
                    <div className="card-body movie-info p-0 mt-3">
                        <span className=''>{movie.Type}</span>
                        {/* <div className='' style={{}}> */}
                            <h3 className='movie-title'>{movie.Title}</h3>

                        {/* </div> */}
                        <span>{movie.Year}</span>
                        <p className="movie-text m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, eum.</p>
                    </div>
                </div>
            </div>
            {/* <MoviePopup
                show={show}
                onClose={() => popUpFunction()}
                movie={movie}
            /> */}
        </>
    )
}

export default MovieCard
