import React, {useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {gsap} from 'gsap'
import {motion} from "framer-motion";

import Hero from '../components/Hero'
import Header from '../components/Header'
import AboutText from '../components/AboutText'
import Team from '../components/Team'
import Services from '../components/Services'
import Footer from '../components/Footer'

import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function About(){

    let titleAnim = useRef(null)
    let subtitleAnim = useRef(null)
    let tl = gsap.timeline()
    const LoadingTransition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

    useEffect(() => {
        tl.from(subtitleAnim, {
            y: 15,
            opacity: 0,
            delay: 1,
            duration: .5,
            ease: "power3.inOut"
            })
            .from(titleAnim, {
                y: 15,
                opacity: 0,
                duration: .5,
                ease: "power3.inOut"
            })
            .from(".scroll-down", {
                y: 15,
                opacity: 0,
                duration: .5,
                ease: "power3.inOut"
            });

    }, [titleAnim, subtitleAnim])

    return(
        <div>
            <motion.div 
                initial={{x:0}}
                animate={{x:'-100%'}}
                exit={{x:0}}
                transition={LoadingTransition}
                className="page-trans">
            </motion.div>
            <Header />
            <Hero background={'/assets/images/about-background-1.jpg'}>
                <h6 ref={el => subtitleAnim = el} className="home-sub-title">Who I am</h6>
                <h1 ref={el => titleAnim = el} className="big-title">I'm a junior develper graduating<br />from Nashville Software School<br /> in March 2021</h1>
            </ Hero>
            <AboutText />
            <Services>
                <h2 className="big-title">I can't wait to join <br /> your team!</h2>
                <p>I bring with me a great work ethic and friendly personality anywhere I go.</p>
                {/* <Link to='/contact'>Contact me</Link> */}
            </Services>
            <Footer />
        </div>
    )
    
}

export default About
