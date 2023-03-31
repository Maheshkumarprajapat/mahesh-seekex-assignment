import React from 'react'
import PropTypes from 'prop-types'
const Button = ({ title }) => {
    return (
        <button className="main-btn">
            {title}
        </button>
    )
}
Button.propTypes = {
    title: PropTypes.string
}
export default Button