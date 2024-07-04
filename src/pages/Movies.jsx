import React, { useState } from 'react'
import useFetchAPI from "../config/useFetchAPI"
import { API_KEY, movies_url } from '../config/config'
import Item from '../components/Item'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Items from '../components/Items';

function Movies() {
    const [page, setPage] = useState(2)
    const data = useFetchAPI(`${movies_url}&page=${page}`)

    return (
        <div className='page container flex-v gap'>
            <p className="heading">Movies</p>
            <Items data={data} />
        </div>
    )

}

export default Movies
