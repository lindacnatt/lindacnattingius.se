import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import projectStyles from './projects.module.scss'


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
                  fixed(width:300, height: 300){
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
    <div className={projectStyles.cardContainer}>
      {data.allMarkdownRemark.edges.map((edge) => {
        return (
          <div key={edge.node.frontmatter.title} className={projectStyles.card}>
            <Img className={projectStyles.featuredImage} fixed={edge.node.frontmatter.featuredImage.childImageSharp.fixed} />
            <div className={projectStyles.info}>
              <h2>{edge.node.frontmatter.title}</h2>
              <Link to={`/projects/${edge.node.fields.slug}`}>
                <p>See more</p>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )

}
export default ProjectsPage