import React from 'react'
import './App.css'
import SearchBar from "./components/SearchBar";
import Header from './components/Header';
import MovieList from './components/MovieList';
const App: React.FC = () => {

  return (
    <>
      {/* <div className=' container-fluid'> */}
        <Header />
        <SearchBar />
        <MovieList />
      {/* </div> */}
    </>
  )
}

export default App
