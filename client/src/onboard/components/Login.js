// REACT
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
import { login } from '../../redux/auth';

// COMPONENTS
import LoginForm from './LoginForm';

// STYLES
import '../onboard.css';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }
    }

    handleChange(e) {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                username: "",
                password: ""
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state.inputs);
        this.clearInputs();
    }

    render() {
        let authErrCode = this.props.authErrCode.login;
        let errMsg = "";
        if (authErrCode < 500 && authErrCode > 399) {
            return errMsg = "Invalid username or password";
        } else if (authErrCode > 499) {
            return errMsg = "Server error!";
        }
        return (
            <div className="login-wrapper">
                <Link to="/onboard/sign-up">
                    <h6>Sign Up</h6>
                </Link>
                <h3>Login</h3>
                <LoginForm
                    handleChange={this.handleChange.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}
                    errMsg={errMsg}
                    {...this.state.inputs} />
            </div>
        )
    }
}


export default connect(state => state.auth, { login })(Login);