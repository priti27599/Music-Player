import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';


function Header() {
    return (
        <div className="header">
            <Link to='/' style={{ textDecoration: "none" }}><h2 className="text">Music Player</h2></Link>

            <div className="search-box">
                <input className="input" type="text" placeholder="Search" />
                <SearchIcon style={{ color: "gray" }} />
            </div>
        </div>
    )
}

export default Header
