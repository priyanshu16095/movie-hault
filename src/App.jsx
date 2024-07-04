import React, { useEffect } from 'react'
import './css/modern-normalize.css'
import './css/components.css'
import './css/pages.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Trending from './pages/Trending'
import Movies from './pages/Movies'
import Tv from './pages/Tv'
import { genre_url } from './config/config'
import useFetchAPI from './config/useFetchAPI'
import Home from './pages/Home'
import Search from './pages/Search'
import MoviePage from './components/MoviePage'

function App() {

  // const genre = genre_url('movie')
  // const data = useFetchAPI(genre)
  // console.log(data.data.genres);

  return (
    <div className='app'>
      <MoviePage />
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tv' element={<Tv />} />
          <Route path='/search' element={<Search />} />
        </Routes>
        <div className="place"></div>
      </Router>
    </div>
  )
}

export default App
