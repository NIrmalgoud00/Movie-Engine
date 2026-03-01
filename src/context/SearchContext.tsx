import React, { useEffect, createContext, useState } from 'react';
import type { Movie, SearchContextType } from '../types';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

// Create Context
export const SearchContext = createContext<SearchContextType>({
    search: "",
    setSearch: () => { },
    results: [],
    error: null,
    loading: false
});

// Provider Component
export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [search, setSearch] = useState<string>("");
    const [debouncedSearch, setDebouncedSearch] = useState<string>("");
    const [results, setResults] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);

        return () => clearTimeout(timer);
    }, [search]);

    useEffect(() => {
        const loadMovies = async () => {
            if (debouncedSearch) {
                // 🔍 If search has value
                const movieList = await fetchMovies(debouncedSearch);
                setResults(movieList);
            } else {
                // 🎬 If search is empty → load 20 default movies
                const [movieList1, movieList2] = await Promise.all([
                    fetchMovies("movie"),
                    fetchMovies("movies"),
                ]);

                setResults([...movieList1, ...movieList2]);
            }
        };

        loadMovies();
    }, [debouncedSearch]);


    const fetchMovies = async (searchTerm: string) => {
        try {
            setLoading(true);
            // setError(null);

            const res = await fetch(
                `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${searchTerm}`
            );
            const data = await res.json();

            return data.Search;

        } catch (err) {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <SearchContext.Provider value={{
            search,
            setSearch,
            results,
            error,
            loading
        }}>
            {children}
        </SearchContext.Provider>
    );
};