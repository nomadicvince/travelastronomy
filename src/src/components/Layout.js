import React from 'react'


//Global CSS
import '../css/global.css'

import Navbar from './Navbar'
import Footer from './Footer'
import SiteMetadata from './SiteMetadata'


const Layout = ({children}) => {
    return (
        <main>
            <SiteMetadata />
           <Navbar />
           {children}
           <Footer /> 
        </main>
    )
}

export default Layout;
