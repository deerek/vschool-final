import React from 'react'

function LoginForm(props) {
    return (
        <div>
        <form onSubmit={props.handleSubmit} className="login-form">
            <div className="user-type-wrapper">
                <label htmlFor="userType">
                    <input type="radio" name="userType" value="athlete" onChange={props.handleChange} checked={"athlete" === props.userType}/>
                Athlete</label>
                <label htmlFor="userType">
                    <input type="radio" name="userType" value="brand" onChange={props.handleChange} checked={"brand" === props.userType}/>
                Brand</label>
            </div>
            <input  name="username" 
                    placeholder="Username" 
                    type="text" autocomplete="off"
                    onChange={props.handleChange}
                    value={props.username}/>
            <input  name="password" 
                    placeholder="Password" 
                    type="password"
                    onChange={props.handleChange}
                    value={props.password}/>
            <button className="login-button" type="submit">Login</button>
        </form>
        </div>
    )
}

export default LoginForm;
