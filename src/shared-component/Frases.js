import PropTypes from 'prop-types';
import React from 'react'
function Frase({saudacao,nome,sobreNome}) {

    return (
        <>
            <h1 className="Texto-centro">{nome} {sobreNome}</h1>
        </>
    )

}

Frase.propTypes = {
    saudacao:PropTypes.string,
    nome:PropTypes.string,
    sobreNome:PropTypes.string,
}
export default Frase
