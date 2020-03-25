import React from 'react'
import herostyles from '../css/hero.module.css'

const Hero = () => {
    return (
        <div className={herostyles.hero}>
            <p className={herostyles.tagline}>Travel the World. Explore the Universe</p>
        </div>
    )
}

export default Hero;
