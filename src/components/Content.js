import React from 'react'
import contentstyles from '../css/content.module.css'
import Title from '../components/Title'

const Content = () => {
    return (
        <div className={contentstyles.content}>
            <div className={contentstyles.content_container}>
                <Title title="Featured" subtitle="Posts" />
            </div>
        </div>
    )
}

export default Content;