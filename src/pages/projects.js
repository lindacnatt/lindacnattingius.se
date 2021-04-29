import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import projectStyles from './projects.module.scss'


const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark (
        sort: { fields: frontmatter___id, order: ASC }
      ){
        edges{
          node{
            frontmatter{
              title
              date
              categories
              description
              featuredImage{
                childImageSharp{
                  fluid(maxWidth:600, maxHeight: 500, quality: 100){
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
          <Link to={`/projects/${edge.node.fields.slug}`} key={idx} className={projectStyles.card}>
            <div className={projectStyles.info}>
              <p className={projectStyles.H2}>{edge.node.frontmatter.title}</p>
              <div className={projectStyles.categories}> {edge.node.frontmatter.categories.map((category, index) => {
                return (
                  <p key={index} className="D">{category}</p>
                )})}
              </div>
              <p className={projectStyles.B}>{edge.node.frontmatter.description}</p>
              <Link to={`/projects/${edge.node.fields.slug}`} className={projectStyles.moreButton}>
                See more <p>⟶</p>
              </Link>
            </div>
            <Img  className={projectStyles.featuredImage} fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} />
          </Link>
        )
      })}
    </div>
  )

}
export default ProjectsPage