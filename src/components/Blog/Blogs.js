import React from 'react'
import Image from 'gatsby-image'
import poststyles from '../../css/blogpost.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Blogs = ({post}) => {

    const {name, slug, country, date, featurePhoto} = post;

    let mainImage = featurePhoto.fluid;
    
    return (
        <div className={poststyles.tour}>
            <div className={poststyles.imgContainer}>
                <Image fluid={mainImage} className={poststyles.img} alt={name}/>
            </div>           
        </div>
    )
}

export default Blogs;
