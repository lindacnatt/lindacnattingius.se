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
            fluid(maxWidth:600, maxHeight: 500){
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
          <div className="Card">
            <div className="mainInfo">
          <h1 className="H1">{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML= {{__html: props.data.markdownRemark.html}}>
            </div>
            </div>
            <Img fluid={props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid} />
          </div>
        </Layout>
    )

}
export default ProjectTemplate