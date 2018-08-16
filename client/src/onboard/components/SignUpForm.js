import React from 'react'

function SignUpForm(props) {
    return (
        <div className="sign-up-form-wrapper">
            <form className="sign-up-form" onSubmit={props.handleSubmit}>
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
                <button className="sign-up-button" type="submit">Create Account</button>
                <p>{props.errMsg}</p>
            </form>
        </div>
    )
}

export default SignUpForm;
