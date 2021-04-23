import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PrimeraApp= ({saludo, subtitulo='soy un subtitulo'}) => {

    
    return ( 
        <>
            <h1>{saludo}</h1>
            <h1>{subtitulo}</h1>
            
            {/*<pre> {JSON.stringify(saludo,null,3)} </pre>*/}
            <p>Mi primera Aplicacion</p>
        </>
    );     
}
PrimeraApp.propTypes = {   
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps={
    subtitulo: 'Soy un sub'
}
export default PrimeraApp;
