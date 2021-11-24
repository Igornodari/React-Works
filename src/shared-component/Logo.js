import PropTypes from 'prop-types';
import React from 'react'

function Logo(logo) {

    return (
        <img src={logo} className="App-logo" alt="logo" />
    )

}

Logo.propTypes = {
    logo: PropTypes.string,
}
export default Logo