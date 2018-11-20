import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './news.css'

class News extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         isOpen: true,
    //     }
     //     this.handleClick = handleClick.bind(this)
    // }
    state = {
        isOpen: false,
    }
    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
    }

render(){
    const {
        name,
        descriptionMore,
        descriptionLess,
        image,
    } = this.props
    const desc =  this.state.isOpen && <p>{descriptionMore}</p> 
    return(
			<div className="news-post">
				<div className="news-photo">
					<img src={image} alt=""/>
				</div>
				<div className="news-name">
					<a href="#"><h2>{name}</h2></a>
				</div>
				<div className="news-description">
                    {descriptionLess}
                    {desc}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'Read less..' : 'Read more..'}
                    </button>
				</div>
			</div>
    )
}
handleClick = () => {
    console.log('---', 'clicked')
    this.setState({
        isOpen: !this.state.isOpen,
    })
}
}



export default News