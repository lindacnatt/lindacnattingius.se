import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

export const query = graphql`
query ($slug:String) {
    markdownRemark ( fields: { slug:{ eq: $slug }} 
    ){
      frontmatter {
        title
        date
        featuredImage{
          childImageSharp{
            fixed(width:200, height:200){
              ...GatsbyImageSharpFixed
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
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML= {{__html: props.data.markdownRemark.html}}>
            </div>
            <Img fixed={props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fixed} />
        </Layout>
    )

}
export default ProjectTemplate