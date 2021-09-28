import React from 'react';

import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en GifGridItems', () => {
    
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={title} url={url}/> );

    test('Debe de mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de tener un parrafo en el title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title )

    });

    test('debe de tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        // console.log( img.html() );
        // console.log( img.props() );
        // console.log( img.prop('src') );
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });

    test('Debe de tener animate__bounceInUp', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');
        // console.log( div.prop('className') );
        expect( className.includes('animate__bounceInUp') ).toBe( true );
    });

});
