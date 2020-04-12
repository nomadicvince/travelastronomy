import React from 'react'
// import { Link } from 'gatsby'
import { graphql } from 'gatsby'

//Components
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import blogstyles from '../css/blog.module.css'
import Blogs from '../components/Blog/Blogs'

const Blog = ({data}) => {
    return (
        <Layout>
            <StyledHero img={data.frostyImg.childImageSharp.fluid} />
            <div className={blogstyles.blog_content}>
                <Blogs />
            </div>
        </Layout>    )
}

export const query = graphql`
query frostyImg {
  frostyImg:file(relativePath: {eq: "frosty.jpg"}){
    childImageSharp{
      fluid(quality: 90, maxWidth: 4060){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
export default Blog;
