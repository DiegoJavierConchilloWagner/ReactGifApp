import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('Pruebas en el <GifExpertApp />', () => {
    
    test('Debe de mostrarse correctamente', () => {

        const wrapper = shallow( <GifExpertApp /> );
        expect(wrapper).toMatchSnapshot();

    });
    
    test('Debe de mostrar una lista de categorias', () => {

        const categories = [ 'Goku', 'Vegetta', 'SSJX' ]
        const wrapper = shallow( <GifExpertApp defaultCategories={categories} /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
        
    });
});
