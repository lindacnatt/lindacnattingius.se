import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import projectStyles from './project.module.scss'
import { Link } from 'gatsby'

export const query = graphql`
query ($slug:String) {
    markdownRemark ( fields: { slug:{ eq: $slug }} 
    ){
      frontmatter {
        title
        date
        categories
        role
        practices
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
        <h1 className={projectStyles.title}>{props.data.markdownRemark.frontmatter.title}</h1>
        <Img className={projectStyles.featuredImage} fluid={props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid} />
        <div className={projectStyles.tldrCard}>
          <div className={projectStyles.tldrColumn}>
            <h3>Year</h3>
            <p className="D">{props.data.markdownRemark.frontmatter.date}</p>
          </div>
          <div className={projectStyles.tldrColumn}>
            <h3>Practices</h3>
            {props.data.markdownRemark.frontmatter.practices.map((practice, index) => {
              return (
                <p key={index} className="D">{practice}</p>
              )
            })}
          </div>
          <div className={projectStyles.tldrColumn}>
            <h3>Tools</h3>
            {props.data.markdownRemark.frontmatter.categories.map((category, index) => {
              return (
                <p key={index} className="D">{category}</p>
              )
            })}
          </div>
          <div className={projectStyles.tldrColumn}>
            <h3>Role</h3>
            {props.data.markdownRemark.frontmatter.role.map((role, index) => {
              return (
                <p key={index} className="D">{role}</p>
              )
            })}
          </div>
        </div>
        <div className={projectStyles.projectInfo} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>
        </div>
        <Link className={projectStyles.link} to="/"><p> ⟵ Go back</p></Link>
      </div>
    </Layout>
  )

}
export default ProjectTemplate