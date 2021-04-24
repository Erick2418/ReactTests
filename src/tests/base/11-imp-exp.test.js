import { getHeroeById,getHeroesByOwner } from '../../base/11-imp-exp';
import heroes from './../../data/heroes'

describe('Pruebas en funciones de Heroes', () => {
    

    test('debe de retornar un heroe por id', () => {
        const id=1;
        const heroe= getHeroeById(id);
        const heroeData= heroes.find( h => h.id === id );
        expect( heroe ).toEqual( heroeData );
    });
    test('debe de retornar undefine si Heroe no existe', () => {
        const id=10;
        const heroe= getHeroeById(id);
        //const heroeData= heroes.find( h => h.id === id );
        expect( heroe ).toBe( undefined );
    });
    //TAREA debe retornar un arreglo con los heroes de DC
    // owner en vez de ID
    //toequals al arreglo filtrado
    test('debe retornar un arreglo con los heroes de DC', () => {
        const owner='DC';
        const heroe= getHeroesByOwner(owner);
        const heroeData= heroes.filter( h => h.owner === owner );
        expect( heroe ).toEqual( heroeData );
    });
    //tarea
    // debe retornar un arreglo con los Heroes de Marvel
    // leng=2
    test('debe retornar un arreglo con los Heroes de Marvel', () => {
        const owner='Marvel';
        const heroe= getHeroesByOwner(owner);
        expect( heroe.length ).toBe( 2 );
    });


})
