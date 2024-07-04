import React from 'react'
import Trending from './Trending'
import Movies from './Movies'
import Tv from './Tv'
import Slider from '../components/Slider'
import { movies_url, trending_url, tv_url } from '../config/config'
import useFetchAPI from '../config/useFetchAPI'

function Home() {
  const trending__data = useFetchAPI(`${trending_url}`)
  const movies_data = useFetchAPI(`${movies_url}`)
  const tv_data = useFetchAPI(`${tv_url}`)

  return (
    <div className='home flex-v gap'>
      <Slider data={trending__data} heading={'Trending'} to={'trending'} />
      <Slider data={movies_data} heading={'Movies'} to={'movies'} />
      <Slider data={tv_data} heading={'Tv Series'} to={'tv'} />
    </div>
  )
}

export default Home
