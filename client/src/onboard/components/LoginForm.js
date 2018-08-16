import React from 'react'

function LoginForm(props) {
    return (
        <div>
        <form onSubmit={props.handleSubmit} className="login-form-wrapper">
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
