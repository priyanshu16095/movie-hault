import React from 'react'
import useFetchAPI from '../config/useFetchAPI'

function MoviePage() {
  const { data } = useFetchAPI('https://api.themoviedb.org/3/movie/550?api_key=339e999de85d751bc7d76de4cbe5b857')

  console.log(data.genres)


  return (
    <div className='moviepage container'>
      {/* <img src='https://image.tmdb.org/t/p/w300/hZkgoQYus5vegHoetLkCJzb17zJ.jpg?api_key=339e999de85d751bc7d76de4cbe5b857' className='moviepage__background' /> */}
      <div className="moviepage__content flex-v gap-l">
        <p className='moviepage__title'>{data.title}</p>
        <div className="flex-h gap">
          <p className='moviepage__info'>{data.release_date}</p>
          <p className='moviepage__info'>{data.runtime}min</p>
        </div>
        <p className='moviepage__desc'>{data.overview}</p>
        <div className="flex-h gap">
          {data.genres ? data.genres.map((genre, index) => {
            return (
              <p key={index} className='moviepage__info'>{genre.name}</p>
            )
          }) : null}
        </div>
        <div className="flex-h gap">
          <button className="subscribe__btn">Subscribe to Watch</button>
          <button>+</button>
        </div>
      </div>
    </div>
  )
}

export default MoviePage
