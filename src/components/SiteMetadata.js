import React from 'react'
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const SiteMetadata = ({ pathname }) => {
    const {
      site: {
        siteMetadata: { siteUrl, title, description, tagline },
      },
    } = useStaticQuery(graphql`
      query SiteMetadata {
        site{
          siteMetadata{
            title
            tagline
            description
            author
            siteURL
          }
        }
      }
    `)

  
    return (
      <Helmet defer={false} defaultTitle={`${title} | ${tagline}`} titleTemplate={`%s | ${title}`}>
        <html lang="en" />
        <meta name="description" content={`${description}`} />
        <link rel="canonical" href={`${siteUrl}${pathname}`} />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
  
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
      </Helmet>
    )
  }
  
  export default SiteMetadata
