import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import '../onboard.css';

class SignUp extends Component {
    render() {
        return (
            <div className="sign-up-wrapper">
                <Link to="/onboard/login">
                    <h6>Login</h6>
                </Link>
                <h3>Sign Up</h3>
                <ul>
                    <li>Athlete</li>
                    <li>Brand</li>
                </ul>
                <form className="sign-up-form-wrapper" action="">
                    <input name="firstName" placeholder="First Name" type="text"/>
                    <input name="lastName" placeholder="Last Name" type="text"/>
                    <input name="email" placeholder="Email" type="email"/>
                    <input name="username" placeholder="Username" type="text"/>
                    <input name="password" placeholder="Password" type="password"/>
                    <Link to="/">
                        <button className="sign-up-button">Create Account</button>
                    </Link>
                </form>
            </div>
        )
    }
}


export default SignUp;