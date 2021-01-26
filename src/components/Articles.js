import React from 'react'

import ArticlesItem from '../elements/ArticlesItem'

import ArticlesData from '../data/News'

function Articles(){

    const displayArticles = ArticlesData.map((item, index) => <ArticlesItem key={index} date={item.date} title={item.title} image={item.image} id={item.id} />)

    return(
        <section id="newsSection" className="section">
            <div className="container-fluid-small">
                <div className="row">
                    {displayArticles}
                </div>
            </div>
        </section>
    )
    
}

export default Articles