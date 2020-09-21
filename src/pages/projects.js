import React from "react"

import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields{
                slug
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
                            <Link to ={`/projects/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}

            </ol>
        </Layout>
    )
}
export default ProjectsPage