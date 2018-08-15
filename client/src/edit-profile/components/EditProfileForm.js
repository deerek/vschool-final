import React from 'react';

// STYLES 
import '../edit-profile.css'

function EditProfileForm(props) {
    return (
        <div className="edit-profile-form-wrapper">
            <div className="avatar-wrapper">
                <img className="edit-avatar" src="https://source.unsplash.com/1600x900/?person,people,face,portrait" alt=""/>
            </div>
            <form className="edit-profile-form" action="">
                <input placeholder="First Name" name="firstName" type="text"/>
                <input placeholder="Last Name" name="lastName" type="text"/>
                <input placeholder="Username" name="username" type="text"/>
                <input placeholder="Email" name="email" type="text"/>
                <button>Save</button>
            </form>
        </div>
    )
}

export default EditProfileForm;
