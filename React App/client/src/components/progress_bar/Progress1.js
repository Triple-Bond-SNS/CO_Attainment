import React from 'react'
import PropTypes from 'prop-types'
import './Progress.scss'
const Progress1 = ({ percentage }) => {
    return (
        <div className="box">
            <div className="progress p-bar">
                <div
                    className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                    style={{ width: `${percentage}%` }}>
                    {percentage}%
                </div>
            </div>
        </div>

    )
}

Progress1.propTypes = {
    percentage: PropTypes.number.isRequired
}

export default Progress1