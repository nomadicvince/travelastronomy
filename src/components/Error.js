import React from 'react'
import errorstyles from '../css/error.module.css'

const Wrong = () => {
    return (
        <div className={errorstyles.error_hero}>
            <p className={errorstyles.error_tagline}>Looks like the page you were looking for has fallen into a black hole.</p>
        </div>
    )
}

export default Wrong;