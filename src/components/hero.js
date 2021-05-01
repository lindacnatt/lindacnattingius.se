import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import heroStyles from './hero.module.scss'
import pb from '../images/profilbild.png'
import Img from "gatsby-image" // to take image data and render it

const Hero = () => {
    
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }  
        file(relativePath: { eq: "images/profilbild.png" }) {
            childImageSharp {
              fluid(maxWidth: 800, quality: 75) {
                ...GatsbyImageSharpFluid
              }
            }
          }
    }
`)
    return (
        <div className={heroStyles.hero} >
            <div className={heroStyles.text}>
            <p className={heroStyles.title}>Hello 👋</p>
            <p className={heroStyles.undertext}>I'm Linda, a <b>designer</b> and <b>developer</b> with a passion for UX, graphic design and animations</p>  
            </div>
            <Img fluid={data.file.childImageSharp.fluid} className={heroStyles.pb} /> 
        </div>
    )
}
export default Hero