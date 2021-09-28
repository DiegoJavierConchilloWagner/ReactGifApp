import React from 'react'
import PropTypes from 'prop-types'


export const GifGridItem = ({ title, url }) => {

    return (
        <div className="gifCard animate__animated animate__bounceInUp">
            <img src={ url } alt={ title } />
            <p> { title } </p> 
        </div>

    )
}

GifGridItem.prototypes = { 
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}