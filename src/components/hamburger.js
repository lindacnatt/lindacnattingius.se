import React from "react"
import { Link } from 'gatsby'
import {useSpring, animated, config} from 'react-spring'

import headerStyles from './header.module.scss'

const Hamburger = ({showHam, setShotHam}) => {
    const animation = useSpring({
        opacity: showHam ? 1: 0,
        transform: showHam ? `translateY(0)` : `translateY(-200)`,
        config: config.slow

    });
    return (
        <animated.div style={animation}>
            <Link className={headerStyles.link} activeClassName={headerStyles.activeNavItem} to="../about">About</Link>
            <p>Contact</p>
            <p>Github</p>

        </animated.div>
    )
}
export default Hamburger