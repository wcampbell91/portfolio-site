import React, {useEffect, useRef} from 'react'
import {gsap} from 'gsap'
import {motion} from "framer-motion";

import Hero from '../components/Hero'
import Header from '../components/Header'
import Articles from '../components/Articles'
import Footer from '../components/Footer'

import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function News() {

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
            <Hero>
                <h6 ref={el => subtitleAnim = el} className="sub-title">Latest News</h6>
                <h1 ref={el => titleAnim = el} className="big-title">We're not just boring developers <br /> We love writting as well.</h1>
            </Hero>
            <Articles />
            <Footer />
        </div>
    )
    
}

export default News