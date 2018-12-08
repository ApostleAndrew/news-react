import React from 'react'
import {Link} from 'react-router-dom'
import './menu.css'

const Menu = () => {
    return (
		<div className='menu'>
			<nav>
				<ul>
					<li><Link to='/'>All</Link></li>
					<li><a href="#">Sports</a></li>
					<li><a href="#">Life</a></li>
					<li><a href="money.html">Money</a></li>
					<li><a href="#">Politics</a></li>
					<li><a href="#">Opinion</a></li>
					<li><a href="#">Weather</a></li>
					<li><a href="#">Elections</a></li>
					<li><a href="#">Policing</a></li>
					<li><a href="#">Video</a></li>
					<li><a href="#">Stocks</a></li>
				</ul>
			</nav>
		</div>
    )
}

export default Menu