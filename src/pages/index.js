import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'




const FirstPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
  `)
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Linda Cnattingius</h2>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}

      </ol>
    </Layout>
  )
}
export default FirstPage
