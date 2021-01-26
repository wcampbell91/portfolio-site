import React from 'react'
import Icofont from 'react-icofont'

function ServiceItem(props){

    return(
        <div className="col-12 col-sm-6 services-box anim-right">
            <i class={props.icon}></i>
            <h5 className="sub-title">{props.title}</h5>
        </div>
    )
    
}

export default ServiceItem
