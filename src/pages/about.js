import React from 'react'
import { graphql } from 'gatsby'

//Components
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import aboutstyles from '../css/about.module.css'
import Title from '../components/Title'
import AboutContent from '../components/About'

const About = ({data}) => {
    return (
        <Layout>
            <StyledHero img={data.frostyHollow.childImageSharp.fluid} />
            <div className={aboutstyles.about_content}>
              <Title title="About" subtitle="Us" />
              <AboutContent />
            </div>
        </Layout>
    )
}

export const query = graphql`
query frostyHollow {
  frostyHollow:file(relativePath: {eq: "frosty.jpg"}){
    childImageSharp{
      fluid(quality: 90, maxWidth: 4060){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default About;
