import React from 'react'

import Form from '../elements/Form/Form'

function ContactBody() {

    const date = new Date().getFullYear()

    const socialLinks = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/'
        },
        {
            name: 'Twitter',
            url: 'https://www.twitter.com/'
        }
    ]

    return(
        <section id="contactSection" className="section">
            <div className="container-fluid-small">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 contact-left">
                        <h2 className="big-title anim-bot">Say hello!</h2>
                        <div className="row">

                            <div className="col-12 col-sm-6 anim-bot">
                                <h5 className="sub-title">Get in touch</h5>
                                <ul>
                                    <li>+ (123) 652 54 38</li>
                                    <li>office@strada.domain</li>
                                </ul>
                            </div>
        
                            <div className="col-12 col-sm-6 anim-bot">
                                <h5 className="sub-title">Visit Us</h5>
                                <ul>
                                    <li>787 D Eisenhower Blvd</li>
                                    <li>Your City CA 54382</li>
                                </ul>
                            </div>

                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 copyright">
                                <p>Copyright © {date} Strada Creative. <br /> Built with love by raduCio.</p>
                                <div className="footer-menu">
                                    <ul>
                                        {socialLinks.map((item, i) => <li key={i}><a href={item.url}>{item.name}</a></li>)}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 contact-right anim-right">
                        <Form />
                    </div>

                </div>
            </div>
        </section>
    )

}

export default ContactBody