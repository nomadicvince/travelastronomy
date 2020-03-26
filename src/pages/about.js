import React from 'react'

//Components
import Layout from '../components/Layout'
import aboutstyles from '../css/about.module.css'

const About = () => {
    return (
        <Layout>
           <div className={aboutstyles.about}>
               All about me
           </div>
        </Layout>
    )
}

export default About;