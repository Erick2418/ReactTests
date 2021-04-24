import '@testing-library/jest-dom';
import { getUser,getUsuarioActivo2 } from '../../base/08-funciones';

describe('Pruebas en 08-funciones', () => {

    test('debe retornar un objeto', () => {
        const userTest={ uid: 'ABC123',username: 'GG'};
        const user= getUser();
        // TO EQUALS PERMITE COMPARAR OBJETOS EN EXPECT. 
        // NO SE USA EL TOBE
        expect(user).toEqual(userTest);


    })
    //  TAREA!!!!!!!!
    //GET USUARIO ACTIVO DEBE RETORNAR UN OBJETO
    test('Get usuario activo debe retornar un objeto', () => {
        const nombress='Erick';
        
        const usuActivo=getUsuarioActivo2(nombress);
        expect(usuActivo).toEqual({
            uid:'1234',
            Username:nombress
        });
            

    })
    





})





