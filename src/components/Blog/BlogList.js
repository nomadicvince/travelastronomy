import React, { Component } from 'react'
import itemstyles from '../../css/items.module.css'
import Tour from './Tour'
import Title from '../Title'

export default class BlogList extends Component {
    state = {
        blog:[],
        sortedBlogs: []
    }

    componentDidMount(){
        this.setState({
            blog: this.props.blog.edges,
            sortedBlogs: this.props.blog.edges
        })
    }

    render() {
        return (
            <div className={itemstyles.tour}>
               <Title title="The" subtitle="blog" />
               <div className={itemstyles.center}>
                {this.state.sortedBlogs.map(({ node }) => {
                        return <Tour key={node.id} post={node} />
                    })}
               </div>
            </div>
        )
    }
}
