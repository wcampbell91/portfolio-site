import React from 'react'

function WorkDescription(props) {

    return(
        <section id="projectDescription" className="section">
            <div className="container-fluid-small">
                <div className="row">
                    {props.children}
                </div>
            </div>
        </section>
    )

}

export default WorkDescription