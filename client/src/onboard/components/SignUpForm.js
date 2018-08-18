import React from 'react'

function SignUpForm(props) {
    return (
        <div className="sign-up-form-wrapper">
            <form className="sign-up-form" onSubmit={props.handleSubmit}>
                <input type="radio" name="userType" value="athlete" onChange={props.handleChange} checked={"athlete" === props.userType}/>
                <input type="radio" name="userType" value="brand" onChange={props.handleChange} checked={"brand" === props.userType}/>
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
                        type="email"
                        onChange={props.handleChange}
                        value={props.email}/>
                <input  name="username" 
                        placeholder="Username" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.username}/>
                <input  name="password" 
                        placeholder="Password" 
                        type="password"
                        onChange={props.handleChange}
                        value={props.password}/>
                <label htmlFor="">Gender</label>
                <input type="radio" name="gender" value="male" onChange={props.handleChange} checked={"male" === props.gender}/>
                <input type="radio" name="gender" value="female" onChange={props.handleChange} checked={"female" === props.gender}/>
                <input  name="sport" 
                        placeholder="Enter your sport" 
                        type="text"
                        onChange={props.handleChange}
                        value={props.sport}/>
                <button className="sign-up-button" type="submit">Create Account</button>
                
            </form>
        </div>
    )
}

export default SignUpForm;

// <p>{props.errMsg}</p>
