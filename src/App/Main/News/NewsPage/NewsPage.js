import React from 'react'

import './newspage.css'

import NewsArray, {getNewsMap} from '../newsArray'



const NewsPage = ({
	newsItem = getNewsMap(NewsArray),
	match,
}) => {
    return (
	<article className="page">
		<div>
			<div className="headline-page">
				<h2>{newsItem[match.params.newsId].name}</h2>
			</div>
		</div>
		<div className="news-post-page">
			<div className="news-photo-page">
				<img scr={newsItem[match.params.newsId].image} alt={newsItem.name}/>
			</div>
			<div className="news-description-page">
				<p>
					{newsItem[match.params.newsId].description}
				</p>
			</div>
		</div>
	</article>
    )
}

export default NewsPage