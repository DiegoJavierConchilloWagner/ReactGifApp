import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach ( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );
    });
    
    test('No debe de postear la informacion on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        //Simular inputChange
        input.simulate('change', { target: { value } });

        //Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        //setCategories debe haber sido llamado
        expect( setCategories ).toHaveBeenCalled();
        //Debe haber sido llamado x cantidad veces
        expect( setCategories ).toHaveBeenCalledTimes(1);
        //Debe haber sido llamado por una function
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        //vaciar el input
        expect( wrapper.find('input').prop('value') ).toBe('');

    })
    
    
});
