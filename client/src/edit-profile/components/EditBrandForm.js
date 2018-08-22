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
            <form onSubmit={props.handleBrandSubmit} className="edit-brand-form" >
                <div className="edit-avatar-wrapper">
                        <img className="edit-avatar" src={props.avatar} alt=""/>
                </div>
                <input  name="avatar" autocomplete="off"

                        placeholder="Avatar URL" 
                        type="text"
                        onChange={props.handleBrandChange}
                        value={props.avatar}/>

                <input  name="companyName" 
                        placeholder="Company Name" 
                        type="text"
                        onChange={props.handleBrandChange}
                        value={props.companyName}/>
                <input  name="username" 
                        placeholder="Username" 
                        type="text"
                        onChange={props.handleBrandChange}
                        value={props.username}/>
                <h4>Brand Rep</h4>
                <input  name="firstName" 
                        placeholder="First Name" 
                        type="text"
                        onChange={props.handleBrandChange}
                        value={props.firstName}/>
                <input  name="lastName" 
                        placeholder="Last Name" 
                        type="text"
                        onChange={props.handleBrandChange}
                        value={props.lastName}/>
                <input  name="email" 
                        placeholder="Email" 
                        type="text"
                        onChange={props.handleBrandChange}
                        value={props.email}/>
                <input  name="bio" 
                        placeholder="Bio" 
                        type="text"
                        onChange={props.handleBrandChange}
                        value={props.bio}/>

                <div className="account-info">
                        <h4>Account Info</h4>
                        <input  name="username" 
                                placeholder="Username" 
                                type="text" autocomplete="off"
                                onChange={props.handleBrandChange}
                                value={props.username}/>
                        <input  name="email" 
                                placeholder="Email" 
                                type="text" autocomplete="off"
                                onChange={props.handleBrandChange}
                                value={props.email}/>
                        <div className="bio-input">
                                <input  name="bio" 
                                        placeholder="Bio" 
                                        type="text"
                                        onChange={props.handleBrandChange}
                                        value={props.bio}/>
                        </div>
                </div>
                <div className="brand-rep-info">
                        <h4>Brand Rep Info</h4>
                        <input  name="companyName" 
                                placeholder="Company Name" 
                                type="text" autocomplete="off"
                                onChange={props.handleBrandChange}
                                value={props.companyName}/>
                        <input  name="firstName" 
                                placeholder="Rep First Name" 
                                type="text" autocomplete="off"
                                onChange={props.handleBrandChange}
                                value={props.firstName}/>
                        <input  name="lastName" 
                                placeholder="Rep Last Name" 
                                type="text" autocomplete="off"
                                onChange={props.handleBrandChange}
                                value={props.lastName}/>
                </div>


                <button type="submit">Save</button>

            </form>
        </div>
    )
}

export default EditBrandForm;
