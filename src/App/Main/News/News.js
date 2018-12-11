import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import './news.css'

class News extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
    }

render(){
    const {
        id,
        name,
        description,
        image,

    } = this.props
    return(
			<div className="news-post">
				<div className="news-photo">
					<img src={image} alt=""/>
				</div>
				<div className="news-name">
					<Link to={`news/${id}`}><h2>{name}</h2></Link>
				</div>
				<div className="news-description">
					<p>
                    {description}
					</p>
                    <Link to={`news/${id}`}> <div className='read-more'><p>Read more...</p></div></Link>
				</div>
			</div>
    )
}
}

export default News