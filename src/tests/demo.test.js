

// el describe permite agruparlo.
describe('Pruebas en el archivo demo.test.js',()=>{
    //SALE MAS RAPIDO CON "TEST+TAB"
    test('Debe de ser iguales los strings',()=>{
        //1. Inicializacion
        const mensaje= 'Hola Mundo';
        //2. Estimulo
        const mensaje2= 'Hola Mundo';
        // Observar el comportamiento
        expect(mensaje).toBe(mensaje2);// compara que el tipo y contenido sea el mismo
    })
});

