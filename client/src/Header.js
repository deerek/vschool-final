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
                    <h1>Extreeem</h1>
                </Link>
                <Link to="/profile">
                    <Avatar />
                </Link>
            </div>
            
        )
    }
}

export default Header;
