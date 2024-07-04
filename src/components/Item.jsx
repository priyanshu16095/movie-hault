import React from 'react'
import { API_KEY, img_300, unavailable } from '../config/config'

function Item({ item }) {
  return (
    <div className='item'>
      <img src={item.poster_path ? `${img_300}/${item?.poster_path}?api_key=${API_KEY}` : unavailable} alt={item.title} className='item__img' />
    </div>
  )
}

export default Item
