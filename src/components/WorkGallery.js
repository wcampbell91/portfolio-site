import React from 'react'

function WorkGallery(props){

    return(
        <section id="projectImages" className="section">
            <div className="container-fluid-small">
                <div className="gallery-title text-center">Gallery</div>
                <div className="row">
                
                    <div className="col-12 col-sm-12 col-md-6 project-img-left">
                        {props.imagesLeft.map((item, index) => <img key={index} src={`assets/images/${item}`} alt="" />)}
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 project-img-right">
                        {props.imagesRight.map((item, index) => <img key={index} src={`assets/images/${item}`} alt="" />)}
                    </div>

                </div>
            </div>
        </section>
    )

}

export default WorkGallery
