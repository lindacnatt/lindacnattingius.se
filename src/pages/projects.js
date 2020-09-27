import React from "react" 
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import ProjectsList from "../components/projectsList"

const ProjectsPage = () => {  
    return (
        <Layout>
           <ProjectsList></ProjectsList>
        </Layout>
    )
}
export default ProjectsPage