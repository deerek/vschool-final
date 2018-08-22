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
                    <h1>EXTREEEM</h1>
                </Link>
                <div className="hover-container">
                    <Avatar imgUrl={props.user.avatar} />
                    <div className="hover-menu">
                        <Link to="/profile">
                            <h4>View Your Profile</h4>
                        </Link>
                        <a href="#" onClick={props.logout}>Logout</a>
                    </div>
                </div>
            </div>
            
        )
}

export default connect(state => state.auth, { logout })(Header);
