import React, { useState } from "react"
import Layout from '../components/layout'
import Projects from './projects'
import Hero from '../components/hero'
import IndexStyles from './index.module.scss'
import Seo from '../components/Seo'

const FirstPage = () => {


  return(
    <Layout >
      <Seo title="Linda Cnattingius"/>
      <Hero/>
      <Projects></Projects>
    </Layout>
  )
}
export default FirstPage
