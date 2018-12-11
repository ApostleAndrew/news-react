import React from 'react'
import {Link} from 'react-router-dom'

const MenuDown = () => {
    return(
        <div className="menu-footer">
            <ul>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Servies'>Servies</Link></li>
                <li><Link to='/Channels'>Channels</Link></li>
                <li><Link to='/MoreSites'>More Sites</Link></li>
            </ul>
        </div>  
    )
}


export default MenuDown