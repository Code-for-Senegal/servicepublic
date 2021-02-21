import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../components/fontawesome'
import './footersitemap.scss'

export default function Footersitemap() {
    return (
        <div class="footer-sitemap" data-test="footerCoperia">
            <div class="container">
                <div class="row" role="list">
                    <div class="footer-sitemap-col" role="listitem">
                        <p>Nous suivre</p>
                        <ul>
                            <li>
                                <span aria-hidden="true" class="icon "></span><a rel="noopener noreferrer" target="_self" href="/" data-xiti-name="Social::Lettre_Service-Public::Particuliers::null" data-xiti-type="exit">Lettre Service-Public</a></li>
                            <li>
                                <FontAwesomeIcon icon={['fab', 'twitter']} /><a rel="noopener noreferrer" target="_blank" href="/" title="Twitter - twitter.com - Nouvelle fenêtre" data-xiti-name="Social::Twitter::Particuliers::null" data-xiti-type="exit">Twitter</a></li>
                            <li>
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} /><a rel="noopener noreferrer" target="_blank" href="/" title="Facebook - www.facebook.com - Nouvelle fenêtre" data-xiti-name="Social::Facebook::Particuliers::null" data-xiti-type="exit">Facebook</a></li>
                            <li><FontAwesomeIcon icon={'rss'} /><a href="/" data-xiti-name="Footer::RSS::Particuliers::null" data-xiti-type="navigation">RSS</a></li>
                        </ul>
                    </div>
                    <div class="footer-sitemap-col" role="listitem">
                        <p>Nos engagements</p>
                        <ul>
                            <li>
                                <span aria-hidden="true" class="icon "></span><a href="/" data-xiti-name="Footer::Engagements_et_qualite::Particuliers::null" data-xiti-type="navigation">Engagements et qualité</a>
                            </li>
                            <li>
                                <span aria-hidden="true" class="icon "></span><a href="/" data-xiti-name="Footer::Accessibilite_:__totalement_conforme::Particuliers::null" data-xiti-type="navigation">Accessibilité&nbsp;:  totalement conforme</a>
                            </li>
                            <li>
                                <span aria-hidden="true" class="icon "></span><a href="/" data-xiti-name="Footer::Donnees_personnelles_et_securite::Particuliers::null" data-xiti-type="navigation">Données personnelles et sécurité</a>
                            </li>
                            <li>
                                <span aria-hidden="true" class="icon "></span><a href="/"  role="button">Gestion des cookies</a>
                            </li>
                            <li>
                                <span aria-hidden="true" class="icon "></span><a href="/" data-xiti-name="Footer::Mise_à_disposition_des_donnees::Particuliers::null" data-xiti-type="navigation">Mise à disposition des données</a>
                            </li>
                            <li>
                                <span aria-hidden="true" class="icon "></span><a href="/" data-xiti-name="Footer::Partenaires::Particuliers::null" data-xiti-type="navigation">Partenaires</a>
                            </li>
                            <li>
                                <span aria-hidden="true" class="icon "></span><a href="https://www.service-public.fr/D10001" data-xiti-name="Footer::Co-marquage::Particuliers::null" data-xiti-type="navigation">Co-marquage</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-sitemap-col" role="listitem">
                        <p>Nous connaître</p>
                        <ul>
                            <li>
                                <span aria-hidden="true" class="icon "></span><a href="/" data-xiti-name="Footer::À_propos::Particuliers::null" data-xiti-type="navigation">À propos</a>
                            </li>
                            <li>
                                <span aria-hidden="true" class="icon "></span><a href="/" data-xiti-name="Footer::Plan_du_site::Particuliers::null" data-xiti-type="navigation">Plan du site</a>
                            </li>
                            <li>
                                <span aria-hidden="true" class="icon "></span><a href="/" data-xiti-name="Footer::Aide::Particuliers::null" data-xiti-type="navigation">Aide</a></li>
                            <li>
                                <span aria-hidden="true" class="icon "></span><a href="/" data-xiti-name="Footer::Contact::Particuliers::null" data-xiti-type="navigation">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
