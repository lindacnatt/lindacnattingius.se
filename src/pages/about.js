import React from "react"
import Layout from '../components/layout'
import Img from 'gatsby-image'
import pb from '../images/profilbild.png'
import AboutStyles from './about.module.scss'

const AboutPage = () => {
    return (
        <Layout>
            <div className={AboutStyles.content}>
                <div className={AboutStyles.text}>
                    <h1>About me</h1>
                    <p className={AboutStyles.description}>I'm a developer in love with visual and graphic design</p>
                </div>
                <img className={AboutStyles.pb} src={pb} />
            </div>
        </Layout>
    )
}
export default AboutPage