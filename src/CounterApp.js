import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value=10}) => {
    /*UN Hook basicamente es un arreglo que tiene tanto valores como funciones*/ 
    // se realiza una desestructuracion debido a que por default tiene un valor y una funcion 
    const [counter,setCounter]= useState(value);// [,]
    
    

    // handledadd
    const handleAdd = (e)=>{
        setCounter(counter+1);
       // setCounter( (c)=>c+1);
    }
    // handleReset
    const handleReset = (e)=>{
        setCounter(value);
    // setCounter( (c)=>c+1);
    }
    // handleSubtract
    const handleSubtract = (e)=>{
        setCounter(counter-1);
    // setCounter( (c)=>c+1);
    }
    


    return (
        <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={ handleAdd } >+1</button>
        <button onClick={ handleReset } >Reset</button>     
        <button onClick={ handleSubtract } >-1</button>
        
        </>
    );
}
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
