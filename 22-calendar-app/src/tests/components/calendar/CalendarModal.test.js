import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { CalendarModal } from '../../../components/calendar/CalendarModal';
import moment from 'moment';

// Configuración del store
const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowplus1 = moment(now).add(1, 'hours');

const initState = {
    ui: {
        modalOpen: true
    },
    calendar: {
        events: [],
        activeEvent: {
            title: 'Titulo',
            notes: 'Notas',
            start: now.toDate(),
            end: nowplus1.toDate()

        }
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
        <CalendarModal />
    </Provider>
);

describe('Pruebas en <CalendarModal/>', () => {
    
    test('Debe de mostrar el modal', () => {
        // expect( wrapper.find('.modal').exists() ).toBe(true);
        expect( wrapper.find('Modal').prop('isOpen') ).toBe(true);
    });
    
});
