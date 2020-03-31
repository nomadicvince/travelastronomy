import React from 'react'
// import { Link } from 'gatsby'
import { graphql } from 'gatsby'

//Components
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import aboutstyles from '../css/about.module.css'

const About = ({data}) => {
    return (
        <Layout>
            <StyledHero img={data.oceanImg.childImageSharp.fluid} />
            <div className={aboutstyles.about_content}>
            </div>
        </Layout>
    )
}

export const query = graphql`
query oceanImg {
  oceanImg:file(relativePath: {eq: "oceanworld.png"}){
    childImageSharp{
      fluid(quality: 90, maxWidth: 4060){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default About;
