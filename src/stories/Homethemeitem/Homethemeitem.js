import React from "react"
import PropTypes from 'prop-types'
import './homethemeitem.scss'

const Homethemeitem = ({ list, ...props }) => {
    
    return (
        <ul>
            {list.slice(0,4).map((theme, index) =>
            <li key={index} >
                <a href={theme.path}>{theme.title}</a>,
            </li>           
            )}
            { list.length > 4 && <li class="hellip">…</li>}
        </ul>
    )
}

Homethemeitem.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    list: PropTypes.array.isRequired,
}

Homethemeitem.defaultProps = {
    list: []
}

export default Homethemeitem