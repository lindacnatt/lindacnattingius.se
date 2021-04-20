import React from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'

import AboutStyles from './about.module.scss'

const AboutPage = () => {
    return (
        <Layout>
            <div className={AboutStyles.content}>
                <div className={AboutStyles.text}>
                    <h1>About me</h1>
                    <p className={AboutStyles.description}>Hello! I'm Linda - a curious and ambitious developer with a passion for everything design.</p>
                    <p>I have a degree in Interactive Media Technology and HCI with the specialization in Visual Media from the Royal Institute of Technology in Stockholm. 
                    My core skills lie in the intersection of design and development, which means that I have skills in designing <b>digtial</b> and <b>interactive experiences</b>, as well as in developing final versions of those designs. 
                    <p>
                    I have gained my skills and experiences from my education, 
                    but also from collaborations with KTH’s student union magazine Osqledaren and from my two years as a Graphic Designer at the consulting company Netlight. 
                    These skills include: Web development with Vue and React, Illustration and Animation using the Adobe Suite, collaboration and communication within teams and with clients, and UX practices such as usability testing, iterative processes and user-centered design. </p>
                    </p>
                    <p>If you think I would be a great fit for your team, feel free to contact me via <a href = "mailto: lindacn@kth.se">email</a> or on <a href="https://www.linkedin.com/in/linda-cnattingius">Linkedin</a>, and let's discuss more!</p>
                    <Link className={AboutStyles.link} to="/"><p> ⟵ Go back</p></Link>
                </div>
            </div>
        </Layout>
    )
}
export default AboutPage