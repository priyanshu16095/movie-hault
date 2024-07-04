import React, { useState } from 'react'
import useFetchAPI from "../config/useFetchAPI"
import Item from '../components/Item'
import { tv_url } from '../config/config'
import Items from '../components/Items'

function Tv() {
    const [page, setPage] = useState(2)
    const data = useFetchAPI(`${tv_url}&page=${page}`)

    return (
        <div className='page container flex-v gap'>
            <p className="heading">Tv Series</p>
            <Items data={data} />
        </div>
    )

}

export default Tv
