import React from "react"
import PropTypes from "prop-types"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Navmain from "../Navmain/Navmain"

const Layout = ({ children }) => {

    return (
        <div id="outer-wrap">
            <div id="inner-wrap">
                <Header/>
                <Navmain/>
                <main class="main" id="main" role="main" lang="fr">
                    <div class="container main-container">
                        {children}
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
