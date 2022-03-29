import React from 'react';
import './App.css';
import Navbar from './features/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './routes/home/Home';
import { MovieList } from './routes/movieList/MovieList';
import { About } from './routes/about/About';

function App() {
  return (
    <>
      <div className="min-h-full">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="movies" element={<MovieList />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
