import React from "react"
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <div className={headerStyles.navbar}>
            <Link className={headerStyles.name} to="/">Linda Cnattingius</Link>
            <div>
                <Link className={headerStyles.link} activeClassName={headerStyles.activeNavItem} to="../about">About</Link>
                <Link className={headerStyles.link} activeClassName={headerStyles.activeNavItem} to="../projects">Projects</Link>
            </div>
        </div>
    )
}
export default Header