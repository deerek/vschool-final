import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
import { editProfile } from '../redux/auth';

// COMPONENTS
import EditProfileForm from './components/EditProfileForm';


class EditProfile extends Component {
    
    constructor(props) {
        super(props);
        this.state ={
            inputs: props.user
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.editProfile(this.state.inputs)
            .then(() => this.props.history.push("/profile"))
    }

    render() {
        return (
            <div>
                <Link to="/">
                    <h6>Cancel</h6>
                </Link>
                <EditProfileForm
                    handleChange={this.handleChange.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}
                    {...this.state.inputs} />
            </div>
        )
    }
}


export default connect(state => state.auth, {editProfile})(EditProfile);