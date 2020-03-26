import React from 'react'
import herostyles from '../css/hero.module.css'
import { Link } from 'gatsby'

const Hero = () => {
    return (
        <div className={herostyles.hero}>
            <p className={herostyles.tagline}>Travel the World. Explore the Universe</p>
            <Link to='/blog' className={`btn-white ${herostyles.button}`}>Read Blog</Link>
        </div>
    )
}

export default Hero;
