import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import { useState } from 'react';


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
            <Link className={headerStyles.name} to="/">Linda Cnattingius</Link>
            <div className={headerStyles.links}>
                <Link className={headerStyles.link} to="/about">About</Link>
               
            </div>
            </div>
    </div>
    )
}
export default Header