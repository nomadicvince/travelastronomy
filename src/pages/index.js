import React from "react"
import herostyles from '../css/hero.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { graphql } from 'gatsby'

//Components
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Intro from '../components/Intro'
import Content from '../components/Content'





export default ({data}) => (

<Layout>
    <StyledHero home="true" img={data.heroImg.childImageSharp.fluid}>
        <p className={herostyles.tagline}>Travel the World. Explore the Universe</p>
        <AniLink fade to='/blog' className={`btn-white ${herostyles.button}`}>Read Blog</AniLink>
    </StyledHero>
  <Intro />
  <Content />
</Layout>
)

export const query = graphql`
query heroImg {
  heroImg:file(relativePath: {eq: "hero.jpg"}){
    childImageSharp{
      fluid(quality: 90, maxWidth: 4060){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`




