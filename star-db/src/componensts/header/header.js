import React from 'react'
import './header.css'


const Header = () => {

    return (
        <div className = "header">
            <h1>Star DB</h1>
            <ul>
                <li><a href="#">People</a></li>
                <li><a href="#">Planets</a></li>
                <li><a href="#">Starships</a></li>
            </ul>
        </div>
    )
}

export default Header;