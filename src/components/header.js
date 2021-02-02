import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import { useState } from 'react';
import Hamburger from '../components/hamburger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


import headerStyles from './header.module.scss'

const Header = () => {
    const [showHam, setShowHam] = useState(false);
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
        <div className={headerStyles.header}>
            <div className={headerStyles.navbar}>
                {/* <Link className={headerStyles.name} to="/">{data.site.siteMetadata.author}</Link> */}
               
                <FontAwesomeIcon icon={faBars} size="lg" className={headerStyles.hamburger}  onClick={() => setShowHam(!showHam)}>
                </FontAwesomeIcon>
            </div>
            <Hamburger showHam={showHam} setShowHam={setShowHam}></Hamburger>   
    </div>
    )
}
export default Header