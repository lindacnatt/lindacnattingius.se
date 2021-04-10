import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import heroStyles from './hero.module.scss'
import pb from '../images/profilbild.png'

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
            <div className={heroStyles.text}>
            <p className="H1">Linda Cnattingius</p>
            <p className="H2">A developer with a passion for graphic design, animation and experience design</p>  
            </div>
            <img className={heroStyles.pb} src={pb} />  
        </div>
    )
}
export default Hero