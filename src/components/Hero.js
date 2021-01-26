import React from 'react'

function Hero(props){

    return(
        <section id="heroSection" className={`section parallax-top-section ${props.class}`} style={{backgroundImage: `url(${props.background})`}}>
            <div className={props.tint}></div>
            <div className="container-fluid-small">
                <div className="row">
                    <div className="col-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    )
    
}

export default Hero
