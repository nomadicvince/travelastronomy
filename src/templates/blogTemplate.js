import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import styles from '../css/template.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GoogleMap, LoadScript } from '@react-google-maps/api'

const blogTemplate = ({data}) => {

  const {name, city, region, country, author, date, content:{content}, additional:{additional}, offthebeatenpath:{offthebeatenpath}, featurePhoto, location:{lat, lon}} = data.blog
  
  const containerStyle = {
    width: '600px',
    height: '400px'
  };

  const center = { 
    lat: parseFloat(lat), 
    lng: parseFloat(lon) 
  };
 
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
              <div className={styles.row}>
                <div className={styles.column}>
                    <p>{content}</p>
              <AniLink className={styles.link} fade to='/blogs' >Back to Blogs</AniLink>
                </div>
                <div className={styles.column}>
                <LoadScript
                  googleMapsApiKey={process.env.GOOGLE_MAPS_KEY}
                >
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={15}
                      tilt={0}
                      mapTypeId='hybrid'
                    >

                    </GoogleMap>
                </LoadScript><br /><hr /><br />
                <p><span className={styles.headings}>If You Go</span></p>
                <p>{additional}</p>
                <p><span className={styles.headings}>Off the Beaten Path</span></p>
                <p>{offthebeatenpath}</p>
                </div>
              </div>
              <div>

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
