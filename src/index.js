import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';
//const saludo = <h1>HOLA MUNDO</h1>;
const divRoot= document.querySelector('#root');
//ReactDOM.render( saludo, divRoot);
ReactDOM.render( <PrimeraApp />, divRoot);



