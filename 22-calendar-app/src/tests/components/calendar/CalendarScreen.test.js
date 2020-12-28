import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { CalendarScreen } from '../../../components/calendar/CalendarScreen';

// Configuración del store
const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );
const initState = {
    ui: {
        modalOpen: false
    },
    calendar: {
        events: [],
        activeEvent: null
    },
    auth: {
        checking: false,
        uid: '123ABC123ABC',
        name: 'Keko Kaka'
    }
};
const store = mockStore( initState );
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store = {store}>
        <CalendarScreen />
    </Provider>
);

describe('Pruebas en <CalendarScreen/>', () => {

    test('Debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Pruebas con las interacciones del calendario', () => {
        
    });
    
});
