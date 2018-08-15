import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import '../onboard.css';

class Login extends Component {
    render() {
        return (
            <div className="login-wrapper">
                <Link to="/onboard/sign-up">
                    <h6>Sign Up</h6>
                </Link>
                <h3>Login</h3>
                <form className="login-form-wrapper" action="">
                    <input name="email" placeholder="Email" type="email"/>
                    <input name="password" placeholder="Password" type="password"/>
                    <Link to="/">
                        <button>Login</button>
                    </Link>
                </form>
            </div>
        )
    }
}


export default Login;