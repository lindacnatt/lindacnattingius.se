import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'



const ProjectsList = () => {
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
        <ol>
            {data.allMarkdownRemark.edges.map((edge) => {
                return (
                    <li>
                        <Link to={`/projects/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </Link>
                    </li>
                )
            })}
        </ol>
    )
}

export default ProjectsList