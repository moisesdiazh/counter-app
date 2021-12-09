import React from "react"; //colocando imr + tab te lo coloca
import PropTypes from "prop-types"; //importando los protypes

// funtional components

const PrimeraApp = ({ saludo, subtitulo }) => {
  return (
    //inicio del fragment, sirve para no colocar divs innecearios
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
    //fin del fragment
  );
};

//para obligar a los usuarios que trabajen con tu componente
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,

};

//default props
PrimeraApp.defaultProps = {

  subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
