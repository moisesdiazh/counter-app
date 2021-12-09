import "@testing-library/jest-dom"; //es necesario
import {retornaArreglo} from '../../base/07-deses-arr'

describe('Pruebas en desestructuración', () => {

    test('debe retornar un string y un numero', () => {

        const [letras, numeros] = retornaArreglo(); //['ABC', 123];

        //comparamos las letras
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        //comparamos los numeros
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    })

})