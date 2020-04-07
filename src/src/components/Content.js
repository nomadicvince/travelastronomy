import React from 'react'
import contentstyles from '../css/content.module.css'
import Title from '../components/Title'
import Featured from '../components/Blog/Featured'

const Content = () => {
    return (
        <div className={contentstyles.content}>
            <div className={contentstyles.content_container}>
                <Title title="Featured" subtitle="Posts" />
                <Featured />
            </div>
        </div>
    )
}

export default Content;