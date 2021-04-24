import '@testing-library/jest-dom';
import {retornaArreglo} from './../../base/007-deses-arr'

describe('Pruebas en desdestructuracion arreglo 007', () => {
   test('debe retornar un string y un numero', () => {
        const [letras,numeros] =retornaArreglo();
        
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
        
        

   })
   
    




})
