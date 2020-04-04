import React from 'react'
import errorstyles from '../css/error.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Wrong = () => {
    return (
        <div className={errorstyles.error_hero}>            
            <p className={errorstyles.error_tagline}>Looks like the page you were looking for has fallen into a black hole.</p>
            <AniLink fade to='/' className={`btn-white ${errorstyles.button}`}>Escape Home</AniLink>
        </div>
    )
}

export default Wrong;