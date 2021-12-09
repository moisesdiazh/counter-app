import "@testing-library/jest-dom"; //es necesario
import {getUser} from '../../base/05-funciones'
import {getUsuarioActivo} from '../../base/05-funciones'


describe('Pruebas en 05-funciones.js', () => {

    
    test('getUser debe retornar un objeto', () => {


        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
    
        const user = getUser();
    
        expect(user).toEqual(userTest); 
        //para testear objetos
    })

    //TAREA getUsuarioActivo debe de retornar un objeto

    test('getUsuarioActivo debe retornar un objeto', () => {

        //creamos variable de nombre
        const nombre = 'Moises';
        //creamos variable de user con el nombre
        const user = getUsuarioActivo(nombre);

        //const para testear
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }
    
        //comparamos
        expect(user).toEqual(userTest); 
        //toEqual para testear objetos
    })

})