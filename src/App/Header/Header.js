import React from 'react'

import Logo from './Logo/logo'


import './header.css'

const Header = () => {
    return (
        <header className='header'>
		<Logo/>
		<div className="search-container">
			<form action="/action_page.php">
				<input type="text" placeholder="Search.." name="search"/>
				<button type="submit"><i className="fa fa-search"></i></button>
			</form>
		</div>
		<div className="login-container">
			<form>
				<input type="text" placeholder="Username" name="username"/>
				<input type="text" placeholder="Password" name="psw"/>
				<button type="submit">Register</button>
				<button type="submit">Sign in</button>
			</form>
		</div>
	</header>
    )
}

export default Header