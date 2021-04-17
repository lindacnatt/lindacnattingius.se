import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import projectStyles from './projects.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark{
        edges{
          node{
            frontmatter{
              title
              date
              categories
              description
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
      <h3>PROJECTS</h3>
      {data.allMarkdownRemark.edges.map((edge, idx) => {
        return (
          <div key={idx} className={projectStyles.card}>
            <div className={projectStyles.info}>
              <p className="H2">{edge.node.frontmatter.title}</p>
              <div className={projectStyles.categories}> {edge.node.frontmatter.categories.map((category, index) => {
                return (
                  <p key={index} className="D">{category}</p>
                )})}
              </div>
              <p className={projectStyles.B}>{edge.node.frontmatter.description}</p>
              <Link to={`/projects/${edge.node.fields.slug}`} className={projectStyles.moreButton}>
                See more <FontAwesomeIcon icon={faLongArrowAltRight} />
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