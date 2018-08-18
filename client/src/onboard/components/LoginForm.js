import React from 'react'

function LoginForm(props) {
    return (
        <div>
        <form onSubmit={props.handleSubmit} className="login-form-wrapper">
            <label htmlFor="">Athlete</label>
            <input type="radio" name="userType" value="athlete" onChange={props.handleChange} checked={"athlete" === props.userType}/>
            <label htmlFor="">Brand</label>
            <input type="radio" name="userType" value="brand" onChange={props.handleChange} checked={"brand" === props.userType}/>
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
            <button type="submit">Login</button>
        </form>
        </div>
    )
}

export default LoginForm;
