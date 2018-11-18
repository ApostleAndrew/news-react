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
                    description,
                    image,
                }) => (
                    <article key={id}>
                    <News
                        name={name}
                        description={description}
                        image={image}
                    />
                            
                    </article>
                ))
                }
	    </section>
    )
}

export default Main 