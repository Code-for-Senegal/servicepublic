import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../components/fontawesome'
import './footerlink.scss'

export default function Footerlink() {
    return (
        <div class="footer-link">
            <div class="container">
                <ul>
                    <li>
                        <a href="/" title="Direction de l'information légale et administrative - dila.premier-ministre.gouv.fr - Nouvelle fenêtre">Direction de l'information légale et administrative<FontAwesomeIcon icon={'external-link-alt'} size="xs" /></a>
                    </li>
                    <li>
                        <span aria-hidden="true" class="icon "></span><a href="/" >Mentions légales</a>
                    </li>
                    <li>
                        <span aria-hidden="true" class="icon "></span><a href="/" >Conditions générales d'utilisation</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
