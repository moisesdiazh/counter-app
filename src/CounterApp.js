import React, { useState } from "react";
import PropTypes from "prop-types"; //importando los protypes

//para hacer un funtional component con protypes, el atajo es rafcp
const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value); // el usestate retorna un arreglo con 2 valores

  const handleAdd = () => {
    //por lo general la funcionabilidad la colocamos afuera

    setCounter(counter + 1); //primera forma

    // setCounter((c) => c + 1); segunda forma
  };

  const handleReset = () => {
    setCounter(value); //primera forma
  };

  const handleRestar = () => {
    setCounter(counter - 1); //primera forma
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2 id="value">{counter}</h2>

      {/* luego hacemos el boton invocando la función */}
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleRestar}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
