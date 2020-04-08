import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { useStaticQuery, graphql } from 'gatsby'
import FeaturedBlogs from '../Blog/FeaturedBlogs'
import itemsstyles from '../../css/items.module.css'
import Title from '../../components/Title'

const getFeaturedPosts = graphql`
query{
    featuredBlog: allContentfulBlogPost(filter:{featured:{eq:true}}){
      edges{
        node{
            id
          name
          slug
          country
          date(formatString: "MMMM D, YYYY")
          featured        
          featurePhoto{
            title
            fluid(maxWidth: 800){
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

 const Featured = ({data}) => {

    const response = useStaticQuery(getFeaturedPosts);
    const blog = response.featuredBlog.edges;

    return (
        <div className={itemsstyles.tours}>
            <Title title="Featured" subtitle="Posts" />
            <div className={itemsstyles.center}>
            {blog.map(({node})=> {
                return <FeaturedBlogs key={node.id} post={node}/>
            })}
            </div>
            <AniLink fade to="/blog" className="btn-primary">All Posts</AniLink>
        </div>
    )
}




  export default Featured;