import React from 'react'

//Components
import Layout from '../components/Layout'
import blogstyles from '../css/blog.module.css'

const Blog = () => {
    return (
        <Layout>
           <div className={blogstyles.blog}>
               Read the blog
           </div>
        </Layout>
    )
}

export default Blog;
