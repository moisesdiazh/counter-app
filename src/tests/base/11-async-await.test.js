import "@testing-library/jest-dom"; //es necesario
import {getImagen} from '../../base/11-async-await'

describe('Pruebas con async-await y fetch', () => {

    test('debe de retornar el url de la imagen ', async() => {
        
        const url = await getImagen();
        expect(url.includes('http://')).toBe(true);
    });
    
});