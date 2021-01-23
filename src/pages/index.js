import React from "react"
import Layout from '../components/layout'
import Projects from './projects'
import Hero from '../components/hero'

const FirstPage = () => {
  return(
    <Layout>
      <Hero/>
      <Projects></Projects>
    </Layout>
  )
}
export default FirstPage
