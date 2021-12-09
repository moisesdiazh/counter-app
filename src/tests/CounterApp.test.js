import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';

//pruebas basicas en CounterApp

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />); //creamos la variable wrapper para reutilizarlo en los otros test
    beforeEach( () => {

        wrapper = shallow(<CounterApp />);
    });
    //el beforeEach es ejecutar antes de, aqui estamos reiniciando, 
    //el valor por defecto que tenemos en los test que debemos usar

    test('Debe de mostrar <CounterApp /> correctamente y sus valores por defecto ', () => {

         //mostramos el valor por defecto con el beforeEach
        
        expect(wrapper).toMatchSnapshot(); //realizando el snapshot
    });

    test('Debe de mostrar el valor por defecto de 100', () => {
        
        //aca no sirve el beforeEach porque simplemente estamos creando una nuevo wrapper
        const wrapper = shallow(<CounterApp value={100} />) //mostramos el valor por defecto

        const CounterValue = wrapper.find('#value').text().trim(); 
        //lo buscamos en el html y quitamos espacios con el trim

        expect(CounterValue).toBe('100');
    });
    

    test('debe de incrementar con el boton +1', () => {
        
        
        //mostramos el valor por defecto con el beforeEach

        wrapper.find('button').at(0).simulate('click'); 
        //para buscar en el html, seleccionar el boton en la posición 0 y simulamos el click

        const counterText = wrapper.find('#value').text().trim(); 
        //buscamos el html del h2 y lo dejamos sin espacios

        expect(counterText).toBe('11');

    });

    test('debe de decrecer con el boton -1', () => {
        
        //mostramos el valor por defecto con el beforeEach

        wrapper.find('button').at(2).simulate('click'); 
        //para buscar en el html, seleccionar el boton en la posición 0 y simulamos el click

        const counterText = wrapper.find('#value').text().trim(); 
        //buscamos el html del h2 y lo dejamos sin espacios

        expect(counterText).toBe('9');
        //comparamos el countertext con el valor 

    });

    test('debe de colocar el valor por defecto con el btn reset', () => {
        

        const wrapper = shallow(<CounterApp value={10} />) //mostramos el valor por defecto

        wrapper.find('button').at(0).simulate('click'); //sumar
        wrapper.find('button').at(0).simulate('click'); //sumar
        wrapper.find('button').at(1).simulate('click'); //resetear el valor
        //simulando los clicks en los botones

        const counterText = wrapper.find('#value').text().trim(); 
        //donde se muestra el valor del counter

        // console.log(counterText); //verificando que es lo que nos llega
        // //para buscar en el html, seleccionar el boton en la posición 0 y simulamos el click

        expect(counterText).toBe('10');
        //comparando el valor del countertext con el valor por defecto




    });
    
    
});