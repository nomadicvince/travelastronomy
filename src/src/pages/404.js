import React from 'react'
import Wrong from '../components/Error'
import StyledError from '../components/StyledError'
import { graphql } from 'gatsby'

const Error = ({data}) => {
    return (
    <StyledError home="true" img={data.blackHole.childImageSharp.fluid}>
        <Wrong />
    </StyledError>
        
    )
}

export const query = graphql`
query blackHole {
  blackHole:file(relativePath: {eq: "blackhole.jpg"}){
    childImageSharp{
      fluid(quality: 90, maxWidth: 4060){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default Error;