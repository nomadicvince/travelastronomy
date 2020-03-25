import React from 'react'
import { Link } from 'gatsby'
import navbarstyles from '../css/navbar.module.css'
import logo from "../images/travelastro_trans.png"
import black from "../images/travelastro_trans_black.png"
import { FaAlignRight } from 'react-icons'
import socialicons from '../constants/social-icons'

class Navbar extends React.Component {
    constructor() {
        super()
   
        this.state = {
         normal: logo
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
            const height = 150;
        
            if (windowsScrollTop > height) {
                nav.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                nav.style.transition = '.6s ease-in-out';
                nav_container.style.color = 'rgba(0, 0, 0, 1)';
                this.setState({normal: black});
                } else if (windowsScrollTop < height) {
                nav.style.backgroundColor = 'rgba(0, 0, 0, .7)';
                nav_container.style.color = 'rgba(255, 255, 255, 1)';
                this.setState({normal: logo});
            } 
    }

    render() {
        return (
            <div className={`nav ${navbarstyles.nav}`} onScroll={this.handleScroll}>
                <>
                    <div className={navbarstyles.logo_container}>
                        <img className={navbarstyles.logo} src={this.state.normal} alt="Travel Astronomy logo" />
                    </div>
                </>
                <>
                <div className={`navigation_container ${navbarstyles.navigation_container}`}>
                    <ul>
                        <li>Blog</li>
                        <li>TravelAstropedia</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>  
                </div>
                </>
            </div> 
        )
    }
}

export default Navbar;