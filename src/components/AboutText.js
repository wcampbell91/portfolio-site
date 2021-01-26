import React from 'react'
import {Link} from 'react-router-dom'

function AboutText(){

    return(
        <section id="aboutStory" className="section">
            <div className="container-fluid-small">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 story-left anim-bot">
                        <h2 className="big-title anim-bot">I'm a hard working <br /> career driven developer.</h2>
                        <Link to='/'>View projects</Link>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 story-right anim-right">
                        <div className="story">
                            <p className="big-p">I moved to Nashville in 2015 to pursue a career in live sound, and after achieving all of my  goals to that end, it became clear to me that the life of constant touring, gigs, and 24/7  commitment required of you as a sound person was not the life for me. I decided that a  career change was in order, and web development seemed to check every box that I was  looking for in a job. I also realized that my experience in problem solving and the people  skills that I acquired from my live sound experience would translate very well to the world  of web development. I’m currently enrolled at Nashville Software School and am eager to  begin my journey as a full-stack developer! 
</p>
                        </div>
                    </div>

                    <div className="col-xl-3"></div>

                    <div className="col-xl-3"></div>

                </div>
            </div>
        </section>
    )
    
}

export default AboutText
