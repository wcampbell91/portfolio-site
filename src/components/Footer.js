import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {

    const date = new Date().getFullYear()

    const socialLinks = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/billy.campbell.921'
        },
        {
            name: 'Github',
            url: 'https://github.com/wcampbell91'
        },
        {
            name: 'Linked In',
            url: 'https://www.linkedin.com/in/wcampbell91/'
        }
    ]

    return(
        <footer id="footerSection">
            <div className="container-fluid-small">

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-9 footer-title anim-bot">
                        <h2 className="big-title">Let's work together.</h2>
                    </div>
                    {/* <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 footer-project anim-bot">
                        <Link to='/contact'>Contact me</Link>
                    </div> */}
                </div>

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-11 col-xl-4 copyright">
                        {/* <p>Copyright © {date} Strada Creative.<br />Built with love by raduCio.</p> */}
                        <div className="footer-menu">
                            <ul>
                                {socialLinks.map((item, i) => <li key={i}><a href={item.url}>{item.name}</a></li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="col-1 footer-offset"></div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 contact-box contact-mail">
                        <h5 className="sub-title">Email</h5>
                        <ul>
                            <li>wcampbell91@gmail.com</li>
                        </ul>
                    </div>
                    {/* <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 contact-box contact-address">
                        <h5 className="sub-title">Visit Us</h5>
                        <ul>
                            <li>787 D Eisenhower Blvd Suite 6</li>
                            <li>Your City CA 54382</li>
                            <li>Schedule: 8:00 AM - 6:00 PM</li>
                        </ul>
                    </div> */}
                </div>

            </div>
        </footer>
    )

}

export default Footer
