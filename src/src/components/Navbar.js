import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from '../constants/links'
import navbarstyles from '../css/navbar.module.css'
import logo from "../images/travelastro_trans.png"
import black from "../images/travelastro_trans_black.png"
// import { FaAlignRight } from 'react-icons'
// import socialicons from '../constants/social-icons'

class Navbar extends React.Component {
    constructor() {
        super()
   
        this.state = {
         normal: logo,
         color: "rgba(255, 255, 255, 1)"
        }
    }

    componentDidMount() {    
        document.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = (e) => {
            e.preventDefault();
            const nav = document.querySelector('.nav');
            const nav_container = document.querySelector('.navigation_container');    
            const windowsScrollTop = window.pageYOffset;
            const height = 10;
        
            if (windowsScrollTop > height) {
                nav.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                nav.style.transition = '.6s ease-in-out';
                nav_container.style.color = 'rgba(0, 0, 0, 1)';
                this.setState({normal: black});
                this.setState({color: "rgba(0, 0, 0, 1)"});
                } else if (windowsScrollTop < height) {
                nav.style.backgroundColor = 'rgba(0, 0, 0, .7)';
                nav_container.style.color = 'rgba(255, 255, 255, 1)';
                this.setState({normal: logo});
                this.setState({color: "rgba(255, 255, 255, 1)"});
            } 

    }

    render() {
        return (
            <div className={`nav ${navbarstyles.nav}`} onScroll={this.handleScroll}>
                <>
                    <div className={navbarstyles.logo_container}>
                        <AniLink fade to="/">
                            <img className={navbarstyles.logo} src={this.state.normal} alt="Travel Astronomy logo" />
                        </AniLink>
                    </div>
                </>
                <>
                <div className={`navigation_container ${navbarstyles.navigation_container}`}>
                    <ul>
                 {links.map((item, index) => {
                        return (
                        <li key={index}>
                            <AniLink style={{color: this.state.color, textDecoration: 'none', }} fade to={item.path}>{item.text}</AniLink>
                        </li>
                        )
                     })} 

                    </ul>  
                </div>
                </>
            </div> 
        )
    }
}

export default Navbar;