import React from 'react';
import { Link } from 'react-router-dom';

function AppWelcome() {
    return (
        <div>
            <h2>Welcome to</h2>
            <h1>Extreeem</h1>
            <Link to="/onboard/login">
                <h4>Login</h4>
            </Link>
            <Link to="/onboard/sign-up">
                <h4>Sign Up</h4>
            </Link>
        </div>
    )
}

export default AppWelcome;
