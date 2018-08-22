import React from 'react';

// STYLES 
import '../edit-profile.css'

// IMAGES
const defaultAvatar = require("../../images/defaultAvatar.png")

function EditAthleteForm(props) {
    return (
        <div className="edit-athlete-form-wrapper">     
                <div className="avatar-wrapper">
                        <img className="edit-avatar" src={props.avatar || defaultAvatar} alt=""/>
                </div>           
            <form onSubmit={props.handleSubmit} className="edit-athlete-form" action="">
                <input  name="avatar" 
                        placeholder="Avatar URL" 
                        type="text" autocomplete="off"
                        onChange={props.handleChange}
                        value={props.avatar}/>
                <input  name="firstName" 
                        placeholder="First Name" 
                        type="text" autocomplete="off"
                        onChange={props.handleChange}
                        value={props.firstName}/>
                <input  name="lastName" 
                        placeholder="Last Name" 
                        type="text" autocomplete="off"
                        onChange={props.handleChange}
                        value={props.lastName}/>
                <input  name="username" 
                        placeholder="Username" 
                        type="text" autocomplete="off"
                        onChange={props.handleChange}
                        value={props.username}/>
                <input  name="email" 
                        placeholder="Email" 
                        type="text" autocomplete="off"
                        onChange={props.handleChange}
                        value={props.email}/>
                <input  name="bio" 
                        placeholder="Bio" 
                        type="text" autocomplete="off"
                        onChange={props.handleChange}
                        value={props.bio}/>
                <input  name="sport" 
                        placeholder="Sport" 
                        type="text" autocomplete="off"
                        onChange={props.handleChange}
                        value={props.sport}/>
                <div className="gender-wrapper">
                        <label for="gender">
                                <input type="radio" name="gender" value="male" onChange={props.handleChange} checked={"male" === props.gender}/>        
                        Male</label>
                        <label for="gender">
                                <input type="radio" name="gender" value="female" onChange={props.handleChange} checked={"female" === props.gender}/>
                        Female</label>
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default EditAthleteForm;


