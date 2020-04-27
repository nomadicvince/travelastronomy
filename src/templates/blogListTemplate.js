import React from 'react'
import {graphql} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Image from 'gatsby-image'
import poststyles from '../css/blogpost.module.css'
import StyledHero from '../components/StyledHero'

//Components
import Layout from '../components/Layout'
import blogstyles from '../css/blog.module.css'
import Title from '../components/Title'



const blogListTemplate = (props) => {

      const {data} = props;
    const {currentPage, numPages} = props.pageContext;  
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages  
    const prevPage =
      currentPage - 1 === 1 ? `/blogs/` : `/blogs/${currentPage - 1}`
    const nextPage = `/blogs/${currentPage + 1}`

    console.log({data});

    
    return (
 
          <Layout>
            <StyledHero img={data.oceanImg.childImageSharp.fluid} />
            <div className={blogstyles.blog_content}>               
               <Title title="Blog" subtitle="Posts" />
               <div className={blogstyles.center}>
                 {data.posts.edges.map(({node})=> {
                   return (
                    <div key={node.id} className={poststyles.tour}>
                        <div className={poststyles.imgContainer}>
                            <Image fluid={node.featurePhoto.fluid} className={poststyles.img} alt={node.name}/>
                            <AniLink fade className={poststyles.link} to={`/post/${node.slug}`} >Details</AniLink>
                        </div> 
                        <div className={poststyles.footer}>
                            <h3>{node.name}</h3>
                            <div className={poststyles.info}>
                                <h4 className={poststyles.country}>{node.country}</h4>
                            </div>
                            <div className={poststyles.details}>
                                {node.date}
                            </div>
                        </div>          
                      </div>
                    )
                    
                 })}
                 
                </div>
                <div className={poststyles.page_content}>

                {!isFirst && (
            <AniLink fade to={prevPage}>
              Prev
            </AniLink>
          )}
                {Array.from({ length: numPages }, (_, i) => {
                return (
  
                  <AniLink
                    key={i}
                    fade
                    to={`/blogs/${i === 0 ? "" : i + 1}`}
                    className={
                      i + 1 === currentPage
                        ? `${poststyles.page} ${poststyles.active}`
                        : `${poststyles.page}`
                    }
                  >
                    {i + 1}
                  </AniLink>
                )
          })}

          {!isLast && (
            <AniLink fade to={nextPage}>
              Next
            </AniLink>
          )}
                </div>
            </div>

          </Layout>
  )
}

export const getPosts = graphql`
query getPosts ($skip:Int!, $limit:Int!){
  posts: allContentfulBlogPost 
  (skip:$skip, limit:$limit, sort:{fields:date, order:DESC}){
    edges{
      node{
        contentful_id
        id
        name
        country
        date (formatString: "MMMM Do, YYYY")
        slug
        featurePhoto{
          fluid(maxWidth: 1200, maxHeight: 1100){
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
  oceanImg:file(relativePath: {eq: "oceanworld.png"}){
    childImageSharp{
      fluid(quality: 90, maxWidth: 4060){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
 `


export default blogListTemplate
