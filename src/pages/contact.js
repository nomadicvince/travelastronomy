import React from 'react'
// import { Link } from 'gatsby'
import { graphql } from 'gatsby'

//Components
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'

const Contact = ({data}) => {
    return (
        <Layout>
            <StyledHero img={data.contactImg.childImageSharp.fluid}>
        
            </StyledHero>
        </Layout>
    )
}


export const query = graphql`
query contactImg {
  contactImg:file(relativePath: {eq: "connect.jpg"}){
    childImageSharp{
      fluid(quality: 90, maxWidth: 4060){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default Contact;