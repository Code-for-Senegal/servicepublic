import React from "react"
import Footergouvlink from '../../stories/Footergouvlink/Footergouvlink'
import Footerlink from '../../stories/Footerlink/Footerlink'
import Footersitemap from '../../stories/Footersitemap/Footersitemap'
import './footer.scss'

export default function Footer() {
    return (
        <footer class="footer" role="contentinfo">
            <Footersitemap/>
            <Footergouvlink/>
            <Footerlink/>
        </footer>
    )
}
