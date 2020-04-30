import React from 'react';
import { Link } from "react-router-dom";
function Navbar (){
    return (
        <div>
            <nav className="navbar navey" role="navigation" aria-label="main navigation">
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
                        <Link to="/search" className="navbar-item"> Search </Link>   
                        <Link to="/playlist" className="navbar-item"> Playlist </Link>   
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;