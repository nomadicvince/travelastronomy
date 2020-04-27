import React from 'react'
import aboutstyles from '../css/about.module.css'

const AboutContent = () => {
    return (
        <div className={aboutstyles.about}>
            <div className={aboutstyles.about_container}>
            <p>The world is your gateway to the Universe.</p>

            <p>Since the beginning of recorded history, humanity has looked to the stars. Whether it was to speak to their gods, tell stories to their children, use them as guides to explore or just admire their beauty and wonder; the skies have been a part of our culture and society.</p> 

            <p>Travel Astronomy exists to help you in your explorations of the planet and the skies, bringing you well-crafted travel and astronomy journalism. Come explore with us. Ad Astra...</p>
            </div>
        </div>
    )
}

export default AboutContent;