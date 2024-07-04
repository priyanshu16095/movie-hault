import React, { useState } from 'react'
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TvIcon from '@mui/icons-material/Tv';
import Icon from './Icon';
import Title from './Title';
import { Link } from 'react-router-dom';

function Navigation() {
    const [sticky, setSticky] = useState(false)
    function hanldeScroll() {
        if (window.scrollY > 10) {
            setSticky(true)
            return
        }
        setSticky(false)
    }
    window.addEventListener("scroll", hanldeScroll)

    return (
        <div className={`navigation flex-a ${sticky && 'sticky'}`}>
            <Link to={'/movies'}><Icon icon={<MovieIcon />} title={'Movies'} /></Link>
            <Link to={'/trending'}><Icon icon={<WhatshotIcon />} title={'Trending'} /></Link>
            <Link to={'/'}><Title /></Link>
            <Link to={'/tv'}><Icon icon={<TvIcon />} title={'Tv'} /></Link>
            <Link to={'/search'}><Icon icon={<SearchIcon />} title={'Search'} /></Link>
        </div>
    )
}

export default Navigation
