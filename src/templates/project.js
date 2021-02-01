import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import projectStyles from './project.module.scss'

export const query = graphql`
query ($slug:String) {
    markdownRemark ( fields: { slug:{ eq: $slug }} 
    ){
      frontmatter {
        title
        date
        categories
        featuredImage{
          childImageSharp{
            fluid(maxWidth:600, maxHeight: 300){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }`

const ProjectTemplate = (props) => {
  return (
    <Layout>
      <div className={projectStyles.card}>
      
          <h1 className={projectStyles.title} className="H1">{props.data.markdownRemark.frontmatter.title}</h1>
          <div className={projectStyles.categories}> {props.data.markdownRemark.frontmatter.categories.map((category, index) => {
                return (
                  <p className="D">{category}</p>
                )})}
          </div>
          <Img className={projectStyles.featuredImage} fluid={props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid}/>
          <div className={projectStyles.projectInfo} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>
          </div>     
      </div>
    </Layout>
  )

}
export default ProjectTemplate