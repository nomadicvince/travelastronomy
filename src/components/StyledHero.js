import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
const StyledHero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  min-height: ${props => (props.home ? "calc(110vh - 62px)" : "70vh")};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`