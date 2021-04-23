import '@testing-library/jest-dom';
import {getSaludo} from './../../base/02-Templade';

describe('Pruebas en 02-templade.js',()=>{

    test('Get saludo debe retornar hola Erick', () => {
        const nombre= 'Erick';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola Erick');
        
    })
    test('Get saludo debe retornar hola Joel si no hay argumento nombre', () => {
        //const nombre= '';
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Joel');

    })
});