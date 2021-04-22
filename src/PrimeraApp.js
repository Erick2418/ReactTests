import React, { Fragment } from 'react';
// FUNCIONAL COMPONENT
const PrimeraApp= () => {
    //aqui los concatena pero los separa xd
    //const saludo= [1,2,3,4];
    /*const saludo={
        nombre: 'Erick',
        edad: 22
    };*/
    const saludo='Hola Mundo';
    return ( 
        <>
            <h1>{saludo}</h1>
            {/*<pre> {JSON.stringify(saludo,null,3)} </pre>*/}
            <p>Mi primera Aplicacion</p>
        </>
    ); 
    //otra forma, tambien se coloca div si quieres el fragment por defalt sale si no colocas nada en la etiqueta
    /* return ( 
        <Fragment>
            <h1>HOLA MUNDO</h1>
            <p>Mi primera Aplicacion</p>
        </Fragment>
    );  */
    
}
export default PrimeraApp;
