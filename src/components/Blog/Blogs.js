import React from 'react'
import BlogList from './BlogList'
import {useStaticQuery, graphql} from 'gatsby'

const getBlogs = graphql`
query{
  blog: allContentfulBlogPost(sort:
    {
      fields: [date], order:DESC
    }
  ){
      edges{
        node{
          id
          name
          slug
          country
          date(formatString: "MMMM Do, YYYY")
          featured        
          featurePhoto{
            title
            fluid(maxWidth: 800, maxHeight: 600){
              ...GatsbyContentfulFluid_withWebp
              sizes
            }
          }
        }
      }
    }
  }
`

const Blogs = () => {

  const {blog} = useStaticQuery(getBlogs);

    return (
        <BlogList blog={blog}/>
    )
}

export default Blogs
