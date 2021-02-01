import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import heroStyles from './hero.module.scss'

const Hero = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }  
    }
`)
    return (
        <div className={heroStyles.hero} >
            <p className="H1">Linda Cnattingius</p>
            <p className="H2">A developer with a passion for graphic design, animation and experience design</p>  
            <p> Scroll down to see some of my work</p>
        </div>
    )
}
export default Hero