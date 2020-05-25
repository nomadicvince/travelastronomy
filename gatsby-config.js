require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Travel Astronomy",
    tagline: "Travel the World. Explore the Universe",
    description: "Travel Astronomy exists to help you in your explorations of the planet and the skies, bringing you well-crafted travel and astronomy journalism. Come explore with us. Ad Astra...",
    author: "Vincent Moore",
    siteURL: "http://www.travelastronomy.com"
  },
  
  plugins: [
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },    
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://www.travelastronomy.com',
      sitemap: 'https://www.travelastronomy.com/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }]
    }
  },
  {
    resolve: `gatsby-source-googlemaps-static`,
    options: {
        key: process.env.GOOGLE_MAPS_KEY,
        center: `LATITUDE,LONGITUDE || CITY,REGION`,
    },
},
  `gatsby-plugin-styled-components`,
  `gatsby-transformer-sharp`, 
  `gatsby-plugin-sharp`,
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-smoothscroll`,
  'gatsby-plugin-robots-txt'
],
}
