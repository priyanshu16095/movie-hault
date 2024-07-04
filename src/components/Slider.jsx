import React, { useState } from 'react'
import useFetchAPI from "../config/useFetchAPI"
import { API_KEY, movies_url } from '../config/config'
import Item from '../components/Item'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

function Slider({data,heading,to}) {
    return (
        <div className='slider container flex-v gap-s'>
            <div className="slider__header flex-s">
                <p className="heading">{heading}</p>
                <Link to={`/${to}`}><p className='link flex-h'>View All <NavigateNextIcon className='icon' /></p></Link>
            </div>
            {data.error ?
                <div className='center-both'><p className='info'>{data.error}</p></div>
                :
                <div className="slider__items flex-h gap">
                    {data.data.results ?
                        data.data.results.map((item, index) => {
                            return (
                                <Item item={item} key={index} />
                            )
                        })
                        : null}
                </div>
            }
        </div>
    )

}

export default Slider
