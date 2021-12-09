import "@testing-library/jest-dom"; //es necesario
import heroes from '../../data/heroes'
import {getHeroeById} from '../../base/08-imp-exp'
import {getHeroesByOwner} from '../../base/08-imp-exp'

describe('Pruebas en funciones de heroes', () => {


    test('Debe de retonar un heroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(heroe => heroe.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe de retonar undefined si heroe no existe', () => {
        
        const id = 18;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });
    
    //Debe de retonrar un arreglo con los heroes de DC
    //toEqual al arreglo filtrado
    test('Debe de retonrar un arreglo con los heroes de DC', () => {
        
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        // console.log(heroe);
        const heroeData = heroes.filter(heroe => heroe.owner === owner);

        expect(heroe).toEqual(heroeData);
    });


    //debe de retornar un arreglo con los heroes de marvel
    //legth = 2

    test('Debe de retornar un arreglo con los heroes de marvel', () => {
        
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        // console.log(heroe);
        const heroeData = heroes.filter(heroe => heroe.owner === owner);

        expect(heroe.length).toBe(2);
        //para verificar el tamaño del arreglo sea igual
    });
})
