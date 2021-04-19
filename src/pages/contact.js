import React from "react"
import Layout from '../components/layout'
import Img from 'gatsby-image'
import pb from '../images/profilbild.png'
import AboutStyles from './about.module.scss'

const ContactPage = () => {
    return (
        <Layout>
            <div className={AboutStyles.content}>
                <div className={AboutStyles.text}>
                    <h1>Contact</h1>
                    <p className={AboutStyles.description}>Check out my github or my resumé. Feel free to contect me at "lindacn@kth.se"</p>
                </div>
                
            </div>
        </Layout>
    )
}
export default ContactPage