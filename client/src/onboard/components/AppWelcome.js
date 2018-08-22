import React from 'react';
import { Link } from 'react-router-dom';

// STYLES
import '../onboard.css';

function AppWelcome() {
    return (
        <div className="app-welcome-wrapper">
            <h2>Welcome to</h2>
            <h1>Extreeem</h1>
            <div className="onboard-buttons-wrapper">
                <Link to="/onboard/login">
                    <button className="button-pill button-primary">Login</button>
                </Link>
                <Link to="/onboard/sign-up">
                    <button className="button-pill button-secondary">Sign Up</button>
                </Link>
            </div>
        </div>
    )
}

export default AppWelcome;
