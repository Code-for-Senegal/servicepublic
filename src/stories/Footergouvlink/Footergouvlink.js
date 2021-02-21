import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../components/fontawesome'
import './footergouvlink.scss'

export default function Footergouvlink() {
    return (
        <div class="footer-gouv-link">
            <div class="container">
                <ul class="gouv-link">
                    <li>
                        <a rel="noopener noreferrer" target="_self" href="/" >3939 Allo Service Public</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" target="_blank" href="/" title="Vie-publique.fr - Nouvelle fenêtre">Vie-publique.fr <FontAwesomeIcon icon={'external-link-alt'} size="xs" /></a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" target="_blank" href="/" title="Legifrance.gouv.fr - Nouvelle fenêtre" data-xiti-name="Footer::Legifrance.gouv.fr::Particuliers::null" data-xiti-type="exit">Legifrance.gouv.fr <FontAwesomeIcon icon={'external-link-alt'} size="xs" /></a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" target="_blank" href="/" title="Data.gouv.fr - Nouvelle fenêtre" data-xiti-name="Footer::Data.gouv.fr::Particuliers::null" data-xiti-type="exit">Data.gouv.fr <FontAwesomeIcon icon={'external-link-alt'} size="xs" /></a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" target="_blank" href="/" title="Gouvernement.fr - Nouvelle fenêtre" data-xiti-name="Footer::Gouvernement.fr::Particuliers::null" data-xiti-type="exit">Gouvernement.fr <FontAwesomeIcon icon={'external-link-alt'} size="xs" /></a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" target="_blank" href="/" title="France.fr - Nouvelle fenêtre" data-xiti-name="Footer::France.fr::Particuliers::null" data-xiti-type="exit">France.fr <FontAwesomeIcon icon={'external-link-alt'} size="xs" /></a>
                    </li>
                </ul>
            </div>
        </div>       
    )
}