import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const LinkButton = ({ to, active, children, onClick }) => (
    <Link to={to}>
        <button
            onClick={onClick}
            disabled={active}
            style={{
                width: '100%',
                marginLeft: '4px'
            }}
        >
            {children}
        </button>
    </Link>
)

export default LinkButton