import React from "react"
import {Link} from 'gatsby'


import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/index.scss'

const Layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}
export default Layout