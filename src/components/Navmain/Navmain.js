import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navmain.scss'

export default function Navmain() {
    return (
        <nav class="nav-main" id="nav-main" role="navigation" aria-label="menu Particuliers">
            <div class="container">
                <ul class="nav-main-first nav-main-desktop" id="nav-main-dropdown">
                    <li class="active" data-test="Accueil_active">
                        <a class="nav-main-item nav-main-home" href="/" title="Accueil - actif"><FontAwesomeIcon icon={'home'} size="lg" /></a>
                    </li>
                    <li class="panel">
                        <a class="nav-main-item" href="/" data-parent="#nav-main-dropdown" data-toggle="collapse" data-target="#nav-main-N19810" data-xiti-name="Barre_de_Navigation::Particuliers::::Papiers_-_Citoyennete" data-xiti-type="navigation" aria-expanded="false" role="button" id="ui-collapse-e9uqvdhenlj47fhutn5ew3">Papiers - Citoyenneté</a>
                    </li>
                    <li class="panel">
                        <a class="nav-main-item" href="/" data-parent="#nav-main-dropdown" data-toggle="collapse" data-target="#nav-main-N19805" data-xiti-name="Barre_de_Navigation::Particuliers::::Famille" data-xiti-type="navigation" aria-expanded="false" role="button" id="ui-collapse-b3dktncm5hueezg98jr84k">Famille</a>
                    </li>
                    <li class="panel">
                        <a class="nav-main-item" href="/" data-parent="#nav-main-dropdown" data-toggle="collapse" data-target="#nav-main-N19811" data-xiti-name="Barre_de_Navigation::Particuliers::::Social_-_Sante" data-xiti-type="navigation" aria-expanded="false" role="button" id="ui-collapse-eftzbdgirkpyhta6olob6">Social - Santé</a>
                    </li>
                    <li class="panel">
                        <a class="nav-main-item" href="/" data-parent="#nav-main-dropdown" data-toggle="collapse" data-target="#nav-main-N19806" data-xiti-name="Barre_de_Navigation::Particuliers::::Travail" data-xiti-type="navigation" aria-expanded="false" role="button" id="ui-collapse-c6252tbjghlytzlnnsf7gg">Travail</a>
                    </li>
                    <li class="panel">
                        <a class="nav-main-item" href="/" data-parent="#nav-main-dropdown" data-toggle="collapse" data-target="#nav-main-N19808" data-xiti-name="Barre_de_Navigation::Particuliers::::Logement" data-xiti-type="navigation" aria-expanded="false" role="button" id="ui-collapse-otpiz21qj8c7prwiquvqsj">Logement</a>
                    </li>
                    <li class="panel">
                        <a class="nav-main-item" href="/" data-parent="#nav-main-dropdown" data-toggle="collapse" data-target="#nav-main-N19812" data-xiti-name="Barre_de_Navigation::Particuliers::::Transports" data-xiti-type="navigation" aria-expanded="false" role="button" id="ui-collapse-j2z2kk954qwttcd0j5dh">Transports</a>
                    </li>
                    <li class="panel">
                        <a class="nav-main-item" href="/" data-parent="#nav-main-dropdown" data-toggle="collapse" data-target="#nav-main-N19803" data-xiti-name="Barre_de_Navigation::Particuliers::::Argent" data-xiti-type="navigation" aria-expanded="false" role="button" id="ui-collapse-ircskj0kjzs44v014u40r">Argent</a>
                    </li>
                    <li class="panel">
                        <a class="nav-main-item" href="/" data-parent="#nav-main-dropdown" data-toggle="collapse" data-target="#nav-main-N19807" data-xiti-name="Barre_de_Navigation::Particuliers::::Justice" data-xiti-type="navigation" aria-expanded="false" role="button" id="ui-collapse-lmp77w7ixkl5z9qyie0g8c">Justice</a>
                    </li>
                    <li class="panel">
                        <a class="nav-main-item" href="/" data-parent="#nav-main-dropdown" data-toggle="collapse" data-target="#nav-main-N19804" data-xiti-name="Barre_de_Navigation::Particuliers::::Etranger" data-xiti-type="navigation" aria-expanded="false" role="button" id="ui-collapse-8m0lo69jzy80w9ix5l1">Étranger</a>
                    </li>
                    <li class="panel">
                        <a class="nav-main-item" href="/" data-parent="#nav-main-dropdown" data-toggle="collapse" data-target="#nav-main-N19809" data-xiti-name="Barre_de_Navigation::Particuliers::::Loisirs" data-xiti-type="navigation" aria-expanded="false" role="button" id="ui-collapse-izroji8c5cs8nmbrf5scvg">Loisirs</a>
                    </li>
                    <li class="panel">
                        <a class="nav-main-item nav-main-item-actu" href="/" data-xiti-name="Barre_de_Navigation::Particuliers::::Actualites" data-xiti-type="navigation">Actualités</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
