import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import github from '../images/github1.png'
import linkedin from '../images/linkedin.png'
import FootStyles from './footer.module.scss'

const Footer = () => {
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
        <footer className={FootStyles.foot}>
            <h3>Let's connect!</h3>
            <p> Get in touch via <a href = "mailto: lindacn@kth.se">email</a> or <a href="https://www.linkedin.com/in/linda-cnattingius">Linkedin</a> 😎</p>
            <div className={FootStyles.last}>
                <p>© 2021  {data.site.siteMetadata.author} </p>
                <div>
                    <a href="https://github.com/lindacnatt">
                        <img src={github} />
                    </a>
                    <a href="https://www.linkedin.com/in/linda-cnattingius">
                        <img src={linkedin} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer