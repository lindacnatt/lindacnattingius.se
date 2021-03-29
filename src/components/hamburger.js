import React from "react"
import { Link } from 'gatsby'
import { useSpring, animated, config } from 'react-spring'


import hamburgerStyles from './hamburger.module.scss'

const Hamburger = ({ showHam, setShotHam }) => {
    const animation = useSpring({
        display: showHam ? "block" : "hidden",
        opacity: showHam ? 1 : 0,
        
    });
    return (
        <animated.div style={animation} className={hamburgerStyles.ham}>
            <div className={hamburgerStyles.content}>
            <Link to="../about" className="H1">About</Link>
            </div>
        </animated.div>
    )
}
export default Hamburger