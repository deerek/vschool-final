// REACT
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// REDUX
import { connect } from 'react-redux';
import { signup } from '../../redux/auth';

// COMPONENTS
import SignUpForm from './SignUpForm';

// STYLES
import '../onboard.css';

class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            inputs: {
                userType: "",
                firstName: "",
                lastName: "",
                companyName: "",
                email: "",
                username: "",
                password: "",
                gender: "",
                sport: ""
            }
        }
    }

    handleChange(e) {
        e.persist();
        this.setState(prevState => {
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
                userType: "",
                firstName: "",
                lastName: "",
                companyName: "",
                email: "",
                username: "",
                password: "",
                gender: "",
                sport: ""
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state.inputs);
        this.clearInputs();
    }

    render() {
        let authErrCode = this.props.authErrCode.signup;
        let errMsg = "";
        if (authErrCode < 500 && authErrCode > 399) {
            return errMsg = "Invalid username or password";
        } else if (authErrCode > 499) {
            return errMsg = "Server error!"
        }
        return (
            <div className="sign-up-header">
                <Link to="/onboard/login">
                    <h6>Login</h6>
                </Link>
            <div className="sign-up-wrapper">
                <h2>Sign Up</h2>
                <SignUpForm
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                {...this.state.inputs} />
            </div>
            </div>
        )
    }
}


export default connect(state => state.auth, { signup })(SignUp);
