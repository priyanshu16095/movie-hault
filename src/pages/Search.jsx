import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Movies from '../pages/Movies'
import useFetchAPI from '../config/useFetchAPI';
import Items from '../components/Items';
import { tv_url } from '../config/config';

function Search() {
    const tv_data = useFetchAPI(`${tv_url}`)
    return (
        <div className='search flex-v gap'>
            <p className="heading">Search</p>

            <div className="search__header flex-v">
                <div className="search__bar flex-h gap-s    ">
                    <input type="text" placeholder='Seach by name' />
                    <button className='btn'>Search</button>
                </div>
                <div className="search__tabs flex-h">
                    <p className="search__tab">Movies</p>
                    <p className="search__tab">TV Series</p>
                </div>
            </div>

            <Items data={tv_data} />

        </div>
    )
}

export default Search
