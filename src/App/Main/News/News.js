import React, {Component} from 'react'
import PropTypes from 'prop-types'

class News extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
    }

render(){
    const {
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
					<a href="#"><h2>{name}</h2></a>
				</div>
				<div className="news-description">
					<p>
                    {description}
					</p>
				</div>
			</div>
    )
}
}

export default News