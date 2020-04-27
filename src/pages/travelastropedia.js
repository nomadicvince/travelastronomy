import React from 'react'
import { graphql } from 'gatsby'

//Components
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'


const TravelAstro = ({data}) => {
    return (
        <Layout>
            <StyledHero img={data.sculpture.childImageSharp.fluid} />
        </Layout>
    )
}

export const query = graphql`
query {
  sculpture:file(relativePath: {eq: "sculpture.jpg"}){
    childImageSharp{
      fluid(quality: 90, maxWidth: 4060){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default TravelAstro;