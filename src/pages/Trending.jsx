import React, { useState } from 'react'
import useFetchAPI from "../config/useFetchAPI"
import { trending_url } from '../config/config'
import Item from '../components/Item'
import Items from '../components/Items'

function Trending() {
    const [page, setPage] = useState(2)
    const data = useFetchAPI(`${trending_url}&page=${page}`)

    return (
        <div className='page container flex-v gap'>
            <p className="heading">Trending</p>
            <Items data={data} />
        </div>
    )

}

export default Trending
