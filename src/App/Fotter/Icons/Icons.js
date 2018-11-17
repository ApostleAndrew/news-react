import React from 'react'

import facebook from './Icons/facebook.png'
import instagram from './Icons/instagram.png'
import twitter from './Icons/twitter.png'
import youtube from './Icons/youtube.png'

const Icons = () => {
    return (
        <div className="icons">	
            <span>© 2018 News UK</span>
            <ul>
                <li><a href="https://www.facebook.com/"><img src={facebook} alt=""/></a></li>
                <li><a href="#"><img src={instagram} alt=""/></a></li>
                <li><a href="#"><img src={twitter} alt=""/></a></li>
                <li><a href="#"><img src={youtube} alt=""/></a></li>
            </ul>
		</div>

    )
}

export default Icons