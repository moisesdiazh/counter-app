import "@testing-library/jest-dom"; //es necesario
import {getHeroeByIdAsync} from "../../base/09-promesas";
import heroes from '../../data/heroes';

//pruebas con tareas asincronas
describe('Pruebas con promesas', () => {
                                                            //se debe colocar el callback done
    test('getHeroeByIdAsync debe retornar un heroe async', (done) => {
        
        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {
                //comparamos el heroe con el heroe en la posición 0 osea el primero            
                expect(heroe).toBe(heroes[0]); 
                done(); 
                //para indicar que se termino el proceso
            });
    });

    test('Debe de obtener un error si el heroe id no existe ', (done) => {
        
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {

                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
    
    
});