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
            <h1 className="H1">{data.site.siteMetadata.author}</h1>
        </div>
    )
}
export default Hero