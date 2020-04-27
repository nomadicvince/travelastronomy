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
  `gatsby-plugin-styled-components`,
  `gatsby-transformer-sharp`, 
  `gatsby-plugin-sharp`,
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-react-helmet`
],
}
