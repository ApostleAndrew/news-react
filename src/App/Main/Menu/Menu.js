import React from 'react'
import {Link} from 'react-router-dom'
import './menu.css'

const Menu = () => {
    return (
		<div className='menu'>
			<nav>
				<ul>
					<li><Link to='/'>All</Link></li>
					<li><Link to='/Sports'>Sports</Link></li>
					<li><Link to='/Life'>Life</Link></li>
					<li><Link to='/Money'>Money</Link></li>
					<li><Link to='/Politics'>Politics</Link></li>
					<li><Link to='/Opinion'>Opinion</Link></li>
					<li><Link to='/Weather'>Weather</Link></li>
					<li><Link to='/Elections'>Elections</Link></li>
					<li><Link to='/Policing'>Policing</Link></li>
					<li><Link to='/Video'>Video</Link></li>
					<li><Link to='/Stocks'>Stocks</Link></li>
				</ul>
			</nav>
		</div>
    )
}

export default Menu