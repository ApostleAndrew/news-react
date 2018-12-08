import React from 'react'
import {Route} from 'react-router-dom'
import Menu from './Menu/Menu'
import News from './News/News'
import New from './News/new'

import './main.css'
import NewsPage from './News/NewsPage/NewsPage';

const Main = () => {
    return (
        <section>
			<Menu/>
            <div className="headline"><h2>All</h2></div>
            {
                New.map(({
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
                        /> 
						)
				}}/>
                    
                    
                            
                    </article>
                ))
                }
                <Route path='/NewsPage' component={NewsPage} />
	    </section>
    )
}

export default Main 