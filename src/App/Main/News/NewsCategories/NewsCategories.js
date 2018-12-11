import React from 'react'
import NewsArray, { getNewsMap } from './../newsArray';


const NewsCategories = ({
    newsItem = getNewsMap(NewsArray),
    match,
}) => {
    return(
        <div>
         <h2>{newsItem[match.params.categories]}</h2>
        </div>

    )
}

export default NewsCategories