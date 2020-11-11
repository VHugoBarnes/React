import React from 'react';
import '@testing-library/jest-dom';
import { shallow, mount } from 'enzyme';

import { HeroeScreen } from '../../../components/heroes/HeroeScreen';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en el componente <HeroeScreen/>', () => {
    
    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    }
    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>
            <HeroeScreen
                history={historyMock}
            />
        </MemoryRouter>
    );

    test('Debe de mostrar el componente redirect si no hay argumentos en el URL', () => {
        expect( wrapper.find('Redirect').exists() ).toBe( true );
    });
    
});
