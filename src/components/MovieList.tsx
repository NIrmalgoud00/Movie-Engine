import React, { useContext } from 'react'
import MovieCard from './MovieCard'
import { SearchContext } from '../context/SearchContext';

const MovieList: React.FC = () => {

    const { results, error, loading } = useContext(SearchContext);

    if (!results?.length) {
        if (loading) {
            return (<h1>Loading...</h1>)
        }
        else {
            return (<h4>{error}</h4>)
        }
    }

    return (
        <div className="container-fluid">
            <div className="py-4">
                <div className="row g-4">
                    {
                        results?.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList
