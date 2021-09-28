import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGits', () => {
    
    test('Debe de retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'category' ) );
        // const { data, loading } = useFetchGifs( 'category' );
        const { data, loading } = result.current;

        // console.log( data, loading );
        await waitForNextUpdate();

        expect( data ).toEqual( [] );
        expect( loading ).toEqual( true );

    });

    test('Debe de retornar un arreglo de imagenes y loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'category' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toEqual( false );

    });

});
