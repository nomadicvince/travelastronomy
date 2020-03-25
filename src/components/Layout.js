import React from 'react'

//Global CSS
import '../css/global.css'

import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({children}) => {
    return (
        <>
           <Navbar />
           {children}
           <Footer /> 
        </>
    )
}

export default Layout;
