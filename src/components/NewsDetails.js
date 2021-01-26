import React from 'react'

function NewsDetails(props){

    return(
        <section id="singleNews" className="section">
            <div className="container-fluid-small">
                <div className="row">
                    {props.children}
                </div>
            </div>
        </section>
    )
    
}

export default NewsDetails