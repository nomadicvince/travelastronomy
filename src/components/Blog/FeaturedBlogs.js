import React from 'react'
import Image from 'gatsby-image'
import poststyles from '../../css/blogpost.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const FeaturedBlogs = ({post}) => {

    const {name, slug, country, date, featurePhoto} = post;

    let mainImage = featurePhoto.fluid;
    
    return (
        <div className={poststyles.tour}>
            <div className={poststyles.imgContainer}>
                <Image fluid={mainImage} className={poststyles.img} alt={name}/>
                <AniLink fade className={poststyles.link} to={`/post/${slug}`} >Details</AniLink>
            </div> 
            <div className={poststyles.footer}>
                <h3>{name}</h3>
                <div className={poststyles.info}>
                    <h4 className={poststyles.country}>{country}</h4>
                </div>
                <div className={poststyles.details}>
                    {date}
                </div>
            </div>          
        </div>
    )
}

export default FeaturedBlogs;
