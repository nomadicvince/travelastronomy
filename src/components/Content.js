import React from 'react'
import contentstyles from '../css/content.module.css'
import Featured from '../components/Blog/Featured'

const Content = () => {
    return (
        <div className={contentstyles.content}>
            <div className={contentstyles.content_container}>
                <Featured />
            </div>
        </div>
    )
}

export default Content;