import React from 'react';
import { Link } from "react-router-dom";
function Navbar (){
    return (
        <>
            <nav className="navbar navey" role="navigation" aria-label="main navigation" data-testid="nav-bar">
                <div className="navbar-brand"> 
                    <Link to="/" className="navbar-item">
                        <img src="/logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"  height="28"></img>
                    </Link>   
                    <a href="/search" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/search" data-testid="search-page-btn" className="navbar-item"> Search </Link>   
                        <Link to="/playlist" data-testid="playlist-page-btn" className="navbar-item"> Playlist </Link>   
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;