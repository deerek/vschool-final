import React from 'react'

function SignUpForm(props) {
    return (
        <div className="sign-up-form-wrapper">
            <form className="sign-up-form" onSubmit={props.handleSubmit}>
                <label htmlFor="userType">
                        <input type="radio" name="userType" value="athlete" onChange={props.handleChange} checked={"athlete" === props.userType}/>
                Athlete</label>
                <label htmlFor="userType">
                        <input type="radio" name="userType" value="brand" onChange={props.handleChange} checked={"brand" === props.userType}/>
                Brand</label>
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
                <input  name="email" 
                        placeholder="Email" 
                        type="email" autocomplete="off"
                        onChange={props.handleChange}
                        value={props.email}/>
                <input  name="sport" 
                        placeholder="Enter your sport" 
                        type="text" autocomplete="off"
                        onChange={props.handleChange}
                        value={props.sport}/>
                <input  name="username" 
                        placeholder="Username" 
                        type="text" autocomplete="off"
                        onChange={props.handleChange}
                        value={props.username}/>
                <input  name="password" 
                        placeholder="Password" 
                        type="password" autocomplete="off"
                        onChange={props.handleChange}
                        value={props.password}/>
                
                <label for="gender">
                        <input type="radio" name="gender" value="male" onChange={props.handleChange} checked={"male" === props.gender}/>        
                Male</label>
                <label for="gender">
                        <input type="radio" name="gender" value="female" onChange={props.handleChange} checked={"female" === props.gender}/>
                Female</label>

                <button className="sign-up-button" type="submit">Create Account</button>    
                            
            </form>
        </div>
    )
}

export default SignUpForm;

// <p>{props.errMsg}</p>
