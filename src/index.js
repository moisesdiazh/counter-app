import React from "react"; // imporrtando react
import ReactDOM from "react-dom"; //importamos react-dom
import CounterApp from "./CounterApp";
// import PrimeraApp from './PrimeraApp'; //importando primeraApp
import "./index.css"; //importando css

const divApp = document.querySelector("#app");

// ReactDOM.render(<PrimeraApp saludo="Hola mundo" />, divApp);

ReactDOM.render(<CounterApp value={10} />, divApp);
