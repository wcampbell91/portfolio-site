import React, {useRef, useEffect} from 'react'
import {gsap} from 'gsap'
import {motion} from "framer-motion";

import Hero from '../components/Hero'
import Header from '../components/Header'
import Works from '../components/Works'
import Footer from '../components/Footer'

import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Home() {

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
            <Hero background={'/assets/images/background-3.jpeg'}>
                <h6 ref={el => subtitleAnim = el} className="home-sub-title">Welcome</h6>
                <h1 ref={el => titleAnim = el} className="big-title">I am Billy Campbell, a junior developer <br /> from Nashville, TN</h1>
            </ Hero>
            <Works />
            <Footer />
        </div>
    )

}

export default Home
