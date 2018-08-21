import React from 'react';



// STYLES 
import '../edit-profile.css'

function EditBrandForm(props) {
    return (
        <div className="edit-brand-form-wrapper">
            <h1>{props.userType}</h1>
            <div className="avatar-wrapper">
                <img className="edit-avatar" src={props.avatar} alt=""/>
            </div>
            <form onSubmit={props.handleSubmit} className="edit-brand-form" action="">
                <input  name="avatar" 
                        placeholder="Avatar URL" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.avatar}/>
                <input  name="companyName" 
                        placeholder="Company Name" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.companyName}/>
                <input  name="username" 
                        placeholder="Username" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.username}/>
                <h4>Brand Rep</h4>
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
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default EditBrandForm;
