import React, { useState } from "react"
import Layout from '../components/layout'
import Projects from './projects'
import Hero from '../components/hero'
import IndexStyles from './index.module.scss'

const FirstPage = () => {


  return(
    <Layout >
      <Hero/>
      <Projects></Projects>
    </Layout>
  )
}
export default FirstPage
