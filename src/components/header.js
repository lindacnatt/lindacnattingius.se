import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
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
        <div className={headerStyles.navbar}>
            <Link className={headerStyles.name} to="/">{data.site.siteMetadata.author}</Link>
            <div>
                <Link className={headerStyles.link} activeClassName={headerStyles.activeNavItem} to="../about">About</Link>
            </div>
        </div>
    )
}
export default Header