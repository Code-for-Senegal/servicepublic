import React from "react"
import './navtop.scss'

export default function Navtop() {
    return (
        <div class="container">
            <nav class="nav-top-main" role="navigation" aria-label="menu principal">
                <ul>
                    <li class="nav-top-menu">
                        <button id="nav-open-btn" aria-controls="nav-mobile" aria-expanded="false" class="btn btn-menu nav-top-menu" type="button">menu</button>
                    </li>
                    <li class="nav-top-part">
                        <a href="/" class="active" title="Particuliers - actif">Particuliers</a>
                    </li>
                    <li class="nav-top-pro">
                        <a href="/professionnels-entreprises" >
                            Pro<span>fessionnels</span>
                        </a>
                    </li>
                    <li class="nav-top-asso">
                        <a href="/associations">
                            Asso<span>ciations</span></a></li><li class="nav-top-annuaire">
                        <a href="/" data-xiti-name="Annuaire::Particuliers::Accueil::Accueil">
                            Annuaire<span> de l’administration</span></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
