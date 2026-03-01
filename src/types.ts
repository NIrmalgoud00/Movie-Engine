
// Write here the type of App all Variables 

export interface Movie {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

export interface SearchContextType {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    results: Movie[];
    loading: boolean;
    error: string | null;
}