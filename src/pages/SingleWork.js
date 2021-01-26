import React, {useEffect, useRef} from 'react'
import {useParams, Link} from "react-router-dom"
import {gsap} from 'gsap'
import {motion} from "framer-motion";

import Hero from '../components/Hero'
import Header from '../components/Header'
import WorkDescription from '../components/WorkDescription'
import WorkGallery from '../components/WorkGallery'
import WorkNext from '../components/WorkNext'

import Works from '../data/Works'

import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function SingleWork() {

    let titleAnim = useRef(null)
    let subtitleAnim = useRef(null)
    let tl = gsap.timeline()
    const LoadingTransition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

    useEffect(() => {

        tl.from(".single-project-hero", {
                opacity: 0,
                delay: 1,
                duration: 1,
                ease: "power3.inOut"
            })
            .from(subtitleAnim, {
                y: 15,
                opacity: 0,
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

    const {workId} = useParams()
    const thisWork = Works.find(element => element.id == workId)

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
            <Hero background={thisWork.background} class='single-project-hero' tint='dark-bg'>
                <h6 ref={el => subtitleAnim = el} className="sub-title">{thisWork.fixedCategory}</h6>
                <h1 ref={el => titleAnim = el} className="big-title">{thisWork.name}</h1>
            </ Hero>
            <WorkDescription>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5">
                    <h2 className="big-title anim-bot">{thisWork.headline}</h2>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-1"></div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 anim-right">
                    <div className="project-desc">
                        {thisWork.text.map((elem, i) => <p key={i}>{elem}</p>)}
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 desc-bottom desc-bottom-after-2 anim-bot">
                    <a href={thisWork.githubLink}>Github</a>
                    {thisWork.apiLink !== '' ? <a className="ml-3" href={thisWork.apiLink}>API github</a> : ''}
                    {thisWork.deployedLink !== '' ? <a className="ml-3" href={thisWork.deployedLink}>Deployed</a> : ''}
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 desc-bottom desc-bottom-after-1 anim-bot">
                    <p className="fade-p">{thisWork.date}</p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 desc-bottom desc-bottom-before-1 anim-right">
                    <ul>
                        {thisWork.servicesLeft.map((elem, i) => <li key={i}>{elem}</li>)}
                    </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 desc-bottom desc-bottom-before-2 anim-right">
                    <ul>
                        {thisWork.servicesRight.map((elem, i) => <li key={i}>{elem}</li>)}
                    </ul>
                </div>
            </ WorkDescription>
            <WorkGallery imagesLeft = {thisWork.imagesLeft} imagesRight = {thisWork.imagesRight} />
            <WorkNext link={thisWork.id < Works.length ? thisWork.id + 1 : thisWork.id } noMore={thisWork.id == Works.length && 'done'}/>
        </div>
    )

}

export default SingleWork
