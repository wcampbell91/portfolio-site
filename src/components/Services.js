import React from 'react'

import ServiceItem from '../elements/ServiceItem'

function Services(props) {

    const services = [
        {
            icon: 'fab fa-react',
            name: 'ReactJS',
            // list: ['Web Design', 'Interaction Design', 'Visual Solutions']
        },
        {
            icon: 'fab fa-js',
            name: 'Javascript',
            // list: ['Websites', 'Andoid Apps', 'iOS Development']
        },
        {
            icon: 'fab fa-python',
            name: 'Python',
            // list: ['Commercials', 'Market Research', 'Personal Strategy']
        },
        {
            icon: 'fab fa-sass',
            name: 'SCSS',
            // list: ['Brainstorming', 'Solution Search', 'Problem Resolving']
        }
    ]
    const displayServices = services.map((item, index) => <ServiceItem key={index} icon={item.icon} title={item.name} list={item.list} />)

    return(
        <section id="aboutServices" name="aboutServices">
            <div className="container-fluid-small">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 services-top services-left anim-bot">
                        {props.children}
                    </div>

                    <div className="col-lg-1 col-xl-1"></div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                        <div className="row">
                            {displayServices}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default Services
