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
                  fluid(maxWidth:600, maxHeight: 500){
                    ...GatsbyImageSharpFluid
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
            <div className={projectStyles.info}>
              <h2>{edge.node.frontmatter.title}</h2>
              <Link to={`/projects/${edge.node.fields.slug}`} className={projectStyles.moreButton}>
                See more
              </Link>
            </div>
            <Img className={projectStyles.featuredImage} fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} />
          </div>
        )
      })}
    </div>
  )

}
export default ProjectsPage