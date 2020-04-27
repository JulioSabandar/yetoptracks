import React from 'react';

class Navbar extends React.Component{
    render(){
        return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">    
                    <a href="https://bulma.io" className="navbar-item"> 
                    <img src="/logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"  height="28"></img>
                    </a>
                    <a href="https://bulma.io" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a href="https://bulma.io" className="navbar-item">
                            Home
                        </a>

                        <a href="https://bulma.io" className="navbar-item">
                            Playlist
                        </a>
                    </div>
                </div>
            </nav>
        </div>

        )
    }
} 

export default Navbar;