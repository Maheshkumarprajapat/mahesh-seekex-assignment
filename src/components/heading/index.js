import React from 'react'
import PropTypes from 'prop-types'

const Heading = ({ title }) => {
    return (
        <div className='heading-tab'>
            <h2><span>{title}</span></h2>
        </div>
    )
}
Heading.propTypes = {
    title: PropTypes.string
}
export default Heading