import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import styles from '../css/template.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const blogTemplate = ({data}) => {

  const {name, city, region, country, author, date, content:{content}, additional:{additional}, offthebeatenpath:{offthebeatenpath}, featurePhoto, location:{lat, lon}} = data.blog
 
    return (
        <Layout>
          <StyledHero img={featurePhoto.fluid}/>
          <div className={styles.template_content}>
            <div className={styles.template}>
              <span className={styles.title}>{name}</span><br/>
              <span className={styles.city}>{city}, {region}, {country}</span><br />
              <span className={styles.location}>Latitude: {lat}, Longitude: {lon}</span>
              <div className={styles.date}>
                <p className={styles.author}>By {author}</p>
              </div>
              <div className={styles.date}>
                <p>{date}</p>
              </div>
              <div>
                <p>{content}</p>
                <p>{additional}</p>
                <p>{offthebeatenpath}</p>
              </div>
              <div>
              <AniLink className={styles.link} fade to='/' >Back to Home</AniLink>
              </div>
            </div>
          </div>
        </Layout>
    )
}

export const query = graphql`
query($slug:String!) {
	blog: contentfulBlogPost(slug:{eq:$slug}){
    contentful_id
    id
    name
    city
    region
    country
    author
    date(formatString: "MMMM Do, YYYY")
    content{
      content
    }
    additional{
      additional
    }
    offthebeatenpath{
      offthebeatenpath
    }
    featurePhoto{
      fluid(maxWidth: 6000, quality: 100){
        ...GatsbyContentfulFluid_withWebp
      }
    }
    location{
      lon
      lat
    }
    tags{
      name
    }
  }
}
`

export default blogTemplate
