import React from "react"
import Navtop from '../../stories/Navtop/Navtop'
import Logo from '../../stories/Logo/Logo'
import './header.scss'

export default function Header() {
    return (
        <header class="banner" role="banner">
            <div class="nav-top">
                <Navtop/>
                <Logo/>
            </div>
        </header>
    )
}
