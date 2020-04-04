import React from 'react'
// import { Link } from 'gatsby'
import { graphql } from 'gatsby'

//Components
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import contactstyles from '../css/contact.module.css'
import Title from '../components/Title'
import ContactForm from '../components/ContactForm'

const Contact = ({data}) => {
    return (
        <Layout>
            <StyledHero img={data.contactImg.childImageSharp.fluid} />
            <div className={contactstyles.contact_content}>
              <Title title="Contact" subtitle="Us" />
              <ContactForm/>
            </div>
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