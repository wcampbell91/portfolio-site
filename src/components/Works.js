import React, {useState, useEffect} from 'react'

import WorkItem from '../elements/WorkItem'

import works from '../data/Works'

function Works() {

    const [filter, setFilter] = useState('all')
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(works)
    }, []);

    useEffect(() => {
        setProjects([])
        let worksUpdated = []
        for(let i=0; i<works.length; i++){
            if(filter !== 'all' && !works[i].category.includes('portfolio-hidden')){
                works[i].category = `${works[i].category} portfolio-hidden`
            }
            if(filter === 'all'){
                let mue = works[i].category.split(' ')
                works[i].category = mue[0]
            }
            if(works[i].category.includes(filter)){
                works[i].category = filter
            }
            worksUpdated.push(works[i])
        }
        setProjects(worksUpdated);
    }, [filter]);

    const worksFilters = ['all', 'capstones', 'group', 'solo']
    const displayWorks = projects.map((item, i) => <WorkItem key={i} title={item.name} category={item.category} image={item.image} id={item.id}/>)

    return(
        <section id="portfolioSection" className="section">
            <div className="container-fluid-small">

                <h2 className="anim-bot big-title">I'm proud of my work <br /> and I always strive to do my very best.</h2>

                <nav className="nav portfolio-nav anim-bot">
                    {worksFilters.map((item, i) => <a key={i} className={`nav-item ${filter === item ? 'active' : null}`} onClick={() => setFilter(item)}>{item}</a>)}
                </nav>

                <div className="row portfolio-row anim-bot-big">
                    {displayWorks}
                </div>

            </div>
        </section>
    )

}

export default Works
