import React from 'react';



// STYLES 
import '../edit-profile.css'

function EditProfileForm(props) {
    return (
        <div className="edit-profile-form-wrapper">
            <div className="avatar-wrapper">
                <img className="edit-avatar" src={props.avatar} alt=""/>
            </div>
            <form onSubmit={props.handleSubmit} className="edit-profile-form" action="">
                <input  name="avatar" 
                        placeholder="Avatar URL" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.avatar}/>
                <input  name="firstName" 
                        placeholder="First Name" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.firstName}/>
                <input  name="lastName" 
                        placeholder="Last Name" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.lastName}/>
                <input  name="username" 
                        placeholder="Username" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.username}/>
                <input  name="email" 
                        placeholder="Email" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.email}/>
                <input  name="bio" 
                        placeholder="Bio" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.bio}/>
                <input  name="sport" 
                        placeholder="Sport" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.sport}/>
                <input type="radio" name="gender" value="male" onChange={props.handleChange} checked={"male" === props.gender}/>
                <input type="radio" name="gender" value="female" onChange={props.handleChange} checked={"female" === props.gender}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default EditProfileForm;
