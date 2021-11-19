import PropTypes from 'prop-types';

function Frase({nome,sobreNome}) {

    return (
        <row>
            <p>Olá {nome} {sobreNome}</p>
        </row>
    )

}

Frase.propTypes = {
    nome:PropTypes.string,
    sobreNome:PropTypes.string,
}
export default Frase
