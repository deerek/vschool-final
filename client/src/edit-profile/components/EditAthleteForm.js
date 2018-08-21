import React from 'react';

// STYLES 
import '../edit-profile.css'

// IMAGES
const defaultAvatar = require("../../images/defaultAvatar.png")

function EditAthleteForm(props) {
    return (
        <div className="edit-athlete-form-wrapper">
                <h1>{props.userType}</h1>
                
            <form onSubmit={props.handleSubmit} className="edit-athlete-form" action="">
                <div className="avatar-wrapper">
                        <img className="edit-avatar" src={props.avatar || defaultAvatar} alt=""/>
                </div>
                <h5>Profile Picture URL</h5>
                <input  name="avatar" 
                        placeholder="Avatar URL" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.avatar}/>
                <h5>First Name</h5>
                <input  name="firstName" 
                        placeholder="First Name" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.firstName}/>
                <h5>Last Name</h5>
                <input  name="lastName" 
                        placeholder="Last Name" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.lastName}/>
                <h5>Username</h5>
                <input  name="username" 
                        placeholder="Username" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.username}/>
                <h5>Email</h5>
                <input  name="email" 
                        placeholder="Email" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.email}/>
                <h5>Bio</h5>
                <input  name="bio" 
                        placeholder="Bio" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.bio}/>
                <h5>What's Your Sport?</h5>
                <input  name="sport" 
                        placeholder="Sport" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.sport}/>
                <h5>Gender</h5>
                <label className="radio-container" for="male">Male
                        <input type="radio" name="male" value="male" onChange={props.handleChange} checked={"male" === props.gender}/>
                        <span className="checkmark"></span>
                </label>
                <label className="radio-container" for="female">Female
                        <input type="radio" name="female" value="female" onChange={props.handleChange} checked={"female" === props.gender}/>
                        <span className="checkmark"></span>
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default EditAthleteForm;


