import React from 'react'

function RecentPosts(){

    return(
        <>
            <div className="widget">
                <h5 className="sub-title">Recent Posts</h5>

                <div className="recent-post">
                    <h4>Master the skills of React and be successful.</h4>
                    <p className="recent-date">18 November</p>
                </div>
                <div className="recent-post">
                    <h4>You know how much you love it when you get it.</h4>
                    <p className="recent-date">11 November</p>
                </div>
                <div className="recent-post">
                    <h4>We gon' take over the world while haters.</h4>
                    <p className="recent-date">4 November</p>
                </div>
                <div className="recent-post">
                    <h4>The party never end, this life is what I recommend.</h4>
                    <p className="recent-date">27 October</p>
                </div>

            </div>
        </>
    )

}

export default RecentPosts