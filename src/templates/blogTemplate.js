import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import styles from '../css/template.module.css'

const blogTemplate = ({data}) => {

  const {name, city, region, country, date, content:{content}, additional:{additional}, offthebeatenpath:{offthebeatenpath}, featurePhoto, location:{lat, lon}} = data.blog

 
    return (
        <Layout>
          <StyledHero img={featurePhoto.fluid}/>
          <div className={styles.template_content}>
            <div className={styles.template}>
              <p>{name}<br />
              {city}, {region}, {country}<br />
              Latitude: {lat}, Longitude: {lon}<br />
              {date}
              </p>
              <div>
                <p>{content}</p>
                <p>{additional}</p>
                <p>{offthebeatenpath}</p>
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
