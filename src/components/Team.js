import React from 'react'

import TeamItem from '../elements/TeamItem'

function Team(){

    const team = [
        {
            name: 'Vincent Stuani',
            image: 'assets/images/team1.jpg',
            job: 'Backend Developer',
            social: [
                {
                    name: 'instagram',
                    url: 'https://www.instagram.com'
                },
                {
                    name: 'dribbble',
                    url: 'https://www.dribbble.com'
                },
                {
                    name: 'twitter',
                    url: 'https://www.twitter.com'
                }
            ]
        },
        {
            name: 'Victoria McKennie',
            image: 'assets/images/team2.jpg',
            job: 'Lead Project Manager',
            social: [
                {
                    name: 'linkedin',
                    url: 'https://www.linkedin.com'
                },
                {
                    name: 'whatsapp',
                    url: 'https://www.whatsapp.com'
                },
                {
                    name: 'facebook-messenger',
                    url: 'https://www.facebook.com'
                }
            ]
        },
        {
            name: 'Claire Tucker',
            image: 'assets/images/team3.jpg',
            job: 'Frontend Developer',
            social: [
                {
                    name: 'instagram',
                    url: 'https://www.instagram.com'
                },
                {
                    name: 'dribbble',
                    url: 'https://www.dribbble.com'
                },
                {
                    name: 'twitter',
                    url: 'https://www.twitter.com'
                }
            ]
        },
        {
            name: 'Jack Bennedict',
            image: 'assets/images/team4.jpg',
            job: 'Android & iOS Developer',
            social: [
                {
                    name: 'linkedin',
                    url: 'https://www.linkedin.com'
                },
                {
                    name: 'whatsapp',
                    url: 'https://www.whatsapp.com'
                },
                {
                    name: 'facebook-messenger',
                    url: 'https://www.facebook.com'
                }
            ]
        },
        {
            name: 'Grace Henderson',
            image: 'assets/images/team5.jpg',
            job: 'Interaction Designer',
            social: [
                {
                    name: 'instagram',
                    url: 'https://www.instagram.com'
                },
                {
                    name: 'dribbble',
                    url: 'https://www.dribbble.com'
                },
                {
                    name: 'twitter',
                    url: 'https://www.twitter.com'
                }
            ]
        }
    ]
    const displayTeam = team.map((item, index) => <TeamItem key={index} image={item.image} name={item.name} job={item.job} social={item.social} />)

    return(
        <section id="aboutTeam">
            <div className="container-fluid-small">
                <div className="row team-row anim-bot-big">
                    {displayTeam}
                </div>
            </div>
        </section>
    )

}

export default Team