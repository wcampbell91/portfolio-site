import React, {useEffect} from 'react'

function ScrollTop(){

    useEffect(() => {
        window.onscroll = () => {
            const top = window.pageYOffset || document.documentElement.scrollTop;
            const scrollDown = document.getElementById('scroll-id')
            const anchorDown = document.getElementById('a-down')

            if (top > 1) {
                scrollDown.classList.add('scroll-top')
                anchorDown.href = '#heroSection'
            } else {
                scrollDown.classList.remove('scroll-top')
                anchorDown.removeAttribute('href')
            }

            if(top >= 1000) {
                scrollDown.classList.add('scroll-top-active')
            } else {
                scrollDown.classList.remove('scroll-top-active')
            }
        }
    }, [])

    return(
        <div id="scroll-id" className="scroll-down">
            <h5>Scroll Down</h5>
            <div className="scroll-arrow">
                <a href="/" id="a-down">
                    <span className="line line-h"></span>
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                </a>
            </div>
        </div>
    )

}

export default ScrollTop