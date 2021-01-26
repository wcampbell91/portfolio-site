import React from 'react'
import Icofont from 'react-icofont';

function TeamItem(props){

    return(
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 team-box">
            <img src={props.image} alt="" />
            <div className="team-box-title">
                <h3>{props.name}</h3>
                <div className="team-box-social">
                    {props.social.map((item, index) => <a key={index} href={item.url}><span><Icofont icon={item.name}/></span></a>)}
                </div>
            </div>
            <h5 className="sub-title">{props.job}</h5>
        </div>
    )
    
}

export default TeamItem