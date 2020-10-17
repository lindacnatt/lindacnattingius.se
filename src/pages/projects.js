import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'


const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark{
        edges{
          node{
            frontmatter{
              title
              date
              featuredImage{
                childImageSharp{
                  fixed(width:300){
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
    `)
    return (
        <div>
            {data.allMarkdownRemark.edges.map((edge) => {
                return (
                    <div key={edge.node.frontmatter.title}>
                        <Link to={`/projects/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                            <Img fixed={edge.node.frontmatter.featuredImage.childImageSharp.fixed} />
                        </Link>
                    </div>
                )
            })}
        </div>
    )

}
export default ProjectsPage