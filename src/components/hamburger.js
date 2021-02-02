import React from "react"
import { Link } from 'gatsby'
import { useSpring, animated, config } from 'react-spring'


import hamburgerStyles from './hamburger.module.scss'

const Hamburger = ({ showHam, setShotHam }) => {
    const animation = useSpring({
        opacity: showHam ? 1 : 0,
        transform: showHam ? `translateY(0)` : `translateY(-200%)`,
        

    });
    return (
        <animated.div style={animation} className={hamburgerStyles.ham}>
            <div className={hamburgerStyles.content}>
            <Link to="../about" className="H1">About</Link>
            <p className="H1">Contact</p>
            <p className="H1">Github</p>
            </div>
        </animated.div>
    )
}
export default Hamburger