import React from 'react'

const Login = () => {
    return (
        <div className="login-container">
			<form>
				<input type="text" placeholder="Username" name="username"/>
				<input type="text" placeholder="Password" name="psw"/>
				<button type="submit">Register</button>
				<button type="submit">Sign in</button>
			</form>
		</div>
    )
}

export default Login