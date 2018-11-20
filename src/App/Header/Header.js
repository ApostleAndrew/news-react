import React from 'react'

import Logo from './Logo/Logo'
import Search from './Search/Search'
import Login from './Login/Login'


import './header.css'


const Header = () => {
    return (
        <header className='header'>
		<Logo/>
		<Search/>
		{/* <div className='today-day'><h3>Today: {(new Date()).toDateString()}</h3></div>  */}
		<Login/>
	    </header>
    )
}

export default Header