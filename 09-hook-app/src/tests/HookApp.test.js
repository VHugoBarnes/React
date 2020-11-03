import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import { HookApp } from '../HookApp';

describe('Prueba en el componente HookApp', () => {
    
    test('Debe hacer match con el snapshot', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });
    
});
