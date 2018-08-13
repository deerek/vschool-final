import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// COMPONENTS
import EditProfileForm from './components/EditProfileForm';


class EditProfile extends Component {
    render() {
        return (
            <div>
                <Link to="/">
                    <h6>Cancel</h6>
                </Link>
                <EditProfileForm />
            </div>
        )
    }
}


export default EditProfile;
