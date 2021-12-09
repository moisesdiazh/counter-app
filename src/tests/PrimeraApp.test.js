import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme';
import PrimeraApp from '../PrimeraApp';


//una de las primeros test en react, no es la mejor forma pero es la primera
describe('Pruebas en <PrimeraApp />', () => {

    // test('Debe de mostrar el mensaje "Hola mundo" ', () => {
        

    //     const saludo = 'Hola mundo';

    //     const {getByText} = render(<PrimeraApp saludo={saludo} />)

    //     expect(getByText(saludo)).toBeInTheDocument();
    // });


    test('debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola mundo';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)
        //shallow es similar al render

        expect(wrapper).toMatchSnapshot();
    });

    //esto es como para hacer evaluaciones en el html
    test('debe de mostrar el subtitulo enviado por props', () => {

        const saludo = 'Hola mundo';
        const subTitulo = 'Soy un subtitulo';
        const wrapper = shallow(
        <PrimeraApp 
            saludo={saludo} 
            subtitulo={subTitulo}
        />)
        //shallow es similar al render

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subTitulo);
    });


    
});