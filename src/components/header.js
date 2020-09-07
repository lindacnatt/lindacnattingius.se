import React from "react"
import {Link} from 'gatsby'
const Header = () => {
    return (
        <div>
            <Link to="../about">About</Link>
            <Link to="../projects">Projects</Link>
        </div>
    )
}
export default Header