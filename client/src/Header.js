import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// COMPONENTS
import Avatar from './Avatar';


import './app.css';

 class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <Link to="/">
                    <h1>Athl33t</h1>
                </Link>
                <Link to="/onboard">
                    <h4>onboard</h4>
                </Link>
                <Link to="/profile">
                    <Avatar />
                </Link>
            </div>
            
        )
    }
}

export default Header;
