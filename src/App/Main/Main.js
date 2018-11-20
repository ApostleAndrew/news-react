import React from 'react'

import Menu from './Menu/Menu'
import News from './News/News'
import New from './News/new'

import './main.css'

const Main = () => {
    return (
        <section>
			<Menu/>
            <div className="headline"><h2>Politics</h2></div>
            {
                New.map(({
                    id,
                    name,
                    descriptionLess,
                    descriptionMore,
                    image,
                }) => (
                    <article key={id}>
                    <News
                        name={name}
                        descriptionMore = {descriptionMore}
                        descriptionLess={descriptionLess}
                        image={image}
                    />
                            
                    </article>
                ))
                }
	    </section>
    )
}

export default Main 