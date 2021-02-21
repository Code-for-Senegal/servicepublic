import React from "react"
import PropTypes from 'prop-types'
import Homethemeitem from '../Homethemeitem/Homethemeitem'
import './homethemelist.scss'

const Homethemelist = ({ list, ...props }) =>{
    return (
        <div class="home-theme">
            <div class="home-theme-list">
                {list.map((theme, index) =>
                <div key={index} class="home-theme-item">
                    <h3>
                        <a href={theme.path}>
                                <svg id={theme.icon}>
                                </svg>
                            <span>{theme.title}</span>
                        </a>
                    </h3>
                    <Homethemeitem list={theme.subtopics}/>   
                </div>
                )}
            </div>
        </div>
    )
}

Homethemelist.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    list: PropTypes.array.isRequired,
}

Homethemelist.defaultProps = {
    list: []
}

export default Homethemelist