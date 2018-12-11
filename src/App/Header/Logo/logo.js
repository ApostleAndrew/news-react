import React from 'react'
import {Link} from 'react-router-dom'

import logo from './logo.jpg'

const Logo = () => {
	return(	
    <div className="logo">
        <Link to='/'><img src={logo} alt="" className="logo"/></Link>
    </div>	
	)
}


export default Logo