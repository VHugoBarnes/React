import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef />', () => {
   
    test('Debe mostrarse correctamente', () => {
        const wrapper = shallow( <RealExampleRef /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de mostrar el componente <MultipleCustomHooks />', () => {
        const wrapper = shallow( <RealExampleRef /> );
        const button = wrapper.find('button');
        
        button.simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( true );
    })
        
});
