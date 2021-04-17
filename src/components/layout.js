import React, { useState }from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    const [scroll, setScroll] = useState(false);
    const changeBackground = () => {
     if(window.scrollY >= 400){
       setScroll(true)
     }else{
       setScroll(false)
     }
    };

    window.addEventListener('scroll', changeBackground)

    return (
        <div className={ scroll ? 'html active' : 'html'}>
            <div className={layoutStyles.container}>
                <div className={layoutStyles.content}>
                    <Header />
                    {props.children}
                </div>
                <Footer />
            </div>
        </div>
    )
}
export default Layout