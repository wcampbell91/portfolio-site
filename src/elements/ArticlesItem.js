import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function ArticlesItem(props){

    const [selected, setSelected] = useState(false)

    function onHover() {
        setSelected(true)
    }

    function notHover(){
        setSelected(false)
    }
      
    return(
        <div onMouseEnter={onHover} onMouseLeave={notHover} className={`col-12 blog-post anim-bot-big ${selected ? 'selected' : null}`}>
            <Link to={`/single-news-${props.id}`}>
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 blog-date">
                        <h5 className="sub-title">{props.date}</h5>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 blog-title">
                        <h2 className="big-title">{props.title}</h2>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 blog-image">
                        <img src={`assets/images/${props.image}`} alt="" />
                    </div>

                </div>
            </Link>
        </div>
    )

}

export default ArticlesItem