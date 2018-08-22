import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
import { logout } from './redux/auth';

// COMPONENTS
import Avatar from './Avatar';


import './app.css';

 function Header(props) {
     // const { isAuthenticated } = props;
        return (
            <div className="header-wrapper">
                <Link to="/">
                    <h1>Athl33t</h1>
                </Link>
                <button onClick={props.logout}>Logout</button>
                <Link to="/profile">
                    <Avatar imgUrl={props.user.avatar} />
                </Link>
            </div>
            
        )
}

export default connect(state => state.auth, { logout })(Header);
