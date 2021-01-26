import React, {useEffect, useRef} from 'react'
import {useParams} from 'react-router-dom'
import {gsap} from 'gsap'
import {motion} from "framer-motion";

import Hero from '../components/Hero'
import Header from '../components/Header'
import NewsDetails from '../components/NewsDetails'
import Footer from '../components/Footer'

import RecentPosts from '../elements/Widgets/RecentPosts'
import Categories from '../elements/Widgets/Categories'

import ArticlesData from '../data/News'

import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function SingleNews(){

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

    const {newsId} = useParams()
    const thisNews = ArticlesData.find(element => element.id == newsId)

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
            <Hero class='single-news-hero'>
                <h6 ref={el => subtitleAnim = el} className="sub-title"><span className="single-news-date">{thisNews.date}</span>{thisNews.categories.map((item, i) => <a href="/" key={i}>{item}</a>)}</h6>
                <h1 ref={el => titleAnim = el} className="big-title">{thisNews.title}</h1>
            </Hero>
            <NewsDetails>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 single-news-left">

                    <img src={`assets/images/${thisNews.image}`} alt="" />
                    <h3 className="big-title anim-bot">{thisNews.headline}</h3>
                    {thisNews.textOne.map((item, i) => <p key={i}>{item}</p>)}
                    {thisNews.blockquote.text ? 
                        <blockquote>
                            <p>
                                {thisNews.blockquote.text}
                            </p>
                            <cite>{thisNews.blockquote.author}</cite>
                        </blockquote>
                    : null }
                    {thisNews.textTwo.map((item, i) => <p key={i}>{item}</p>)}
                    <p className="tags">
                        {thisNews.tags.map((item, i) => <span key={i}>{item}</span>)}
                    </p>
                    
                </div>

                <div className="col-12 col-sm-8 col-md-8 col-lg-6 col-xl-4 single-news-right sidebar">
                    <RecentPosts />
                    <Categories />
                </div>

                <div className="col-12 col-sm-4 col-md-4 col-lg-6"></div>
            </NewsDetails>
            <Footer />
        </div>
    )

}

export default SingleNews