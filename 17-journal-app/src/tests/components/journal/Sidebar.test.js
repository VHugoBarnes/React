import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
// Librerías para hacer test con thunk
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';

import { Sidebar } from '../../../components/journal/Sidebar';
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';

jest.mock('../../../actions/auth', () =>({
    startLogout: jest.fn()
}));

jest.mock('../../../actions/notes', () => ({
    startNewNote: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id: 'abc'
        },
        notes: []
    }
};
// El estado del store en este instante
let store = mockStore(initState);
store.dispatch = jest.fn();

describe('Pruebas en <Sidebar/>', () => {
   
    test('Debe de mostrarse correctamente', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Sidebar />
            </Provider>
        );
        
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de llamar el startLogout', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Sidebar />
            </Provider>
        );
        // Para hacer llamar a la acción startLogout
        // debemos de dar clic en el boton
        wrapper.find('.btn').prop('onClick')();
        expect(startLogout).toHaveBeenCalled();
    });
    
    test('Debe de llamar el startNewNote', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Sidebar />
            </Provider>
        );
        
        wrapper.find('.journal__new-entry').prop('onClick')();
        expect(startNewNote).toHaveBeenCalled();
    });
    
});
