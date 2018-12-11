import React from 'react'
import {Route} from 'react-router-dom'
import Menu from './Menu/Menu'
import News from './News/News'
import NewsArray from './News/newsArray'

import './main.css'
import NewsPage from './News/NewsPage/NewsPage';
import NewsCategories from './News/NewsCategories/NewsCategories';


    


const Main = ({
    name,
    description,
    id,
    image,
    categories,
}) => {
    return (
        <section>
			<Menu
            name={name}
            description={description}
            image={image}
            id={id}
            categories={categories}
  
            />
            {/* <div className="headline"><h2>All</h2></div> */}
            {
                NewsArray.map(({
                    id,
                    name,
                    description,
                    image,
                }) => (
                    <article key={id}>                    
                    <Route path='/' exact render = {() => {
					return (
                        <News
                        name={name}
                        description={description}
                        image={image}
                        id={id}
                        /> 
                    )}}/>          
                    </article>   
                ))}
                <Route path='/newscategories/:categories' component={NewsCategories}/>
                <Route path='/newspage/:newsId' component={NewsPage}/>
               
	    </section>
    )
}

export default Main 