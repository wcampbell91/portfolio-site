import React from 'react'
import {Link} from 'react-router-dom'

function WorkItem(props){

    return(
        <div className={`col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 portfolio-box ${props.category}`}>
            <div className="cancel-anchor"></div>
            <Link to={`/works-${props.id}`}>

                <div className="portfolio-image">
                    <div className="dark-bg"></div>
                    <img src={props.image} alt="" />
                    <div className="portfolio-text">
                        <h3>{props.title}</h3>
                        <h6>{props.category}</h6>
                    </div>
                </div>

            </Link>
        </div>
    )

}

export default WorkItem