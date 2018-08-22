import React from 'react';
import { Link } from 'react-router-dom';

function EditProfileHeader() {
    return (
        <div className="edit-profile-header">
            <Link to="/">
                <h6>Cancel</h6>
            </Link>
            <h2>Edit Profile</h2>
            <p>save</p>
        </div>
    )
}

export default EditProfileHeader;
