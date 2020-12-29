import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { CalendarModal } from '../../../components/calendar/CalendarModal';
import moment from 'moment';
import { eventStartAddNew, eventClearActiveEvent, eventStartUpdate } from '../../../actions/events';
import { act } from '@testing-library/react';
import Swal from 'sweetalert2';

jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
}));

jest.mock('../../../actions/events', () => ({
    eventStartAddNew: jest.fn(),
    eventClearActiveEvent: jest.fn(),
    eventStartUpdate: jest.fn()
}));

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

    beforeEach(() => {
        jest.clearAllMocks();
    });
    
    test('Debe de mostrar el modal', () => {
        // expect( wrapper.find('.modal').exists() ).toBe(true);
        expect( wrapper.find('Modal').prop('isOpen') ).toBe(true);
    });
    
    test('Debe de llamar la acción de actualizar y cerrar el modal', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });
        expect( eventStartUpdate ).toHaveBeenCalled();
        expect( eventClearActiveEvent ).toHaveBeenCalled();
    });
   
    test('Debe de mostrar error si falta el titulo', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });
        expect( eventStartUpdate ).not.toHaveBeenCalled();
        expect( wrapper.find('input[name="title"]').hasClass('is-invalid') ).toBeTruthy();
    });
    
    test('Debe de llamar la creación de un nuevo evento', () => {
        const initState = {
            ui: {
                modalOpen: true
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
                <CalendarModal />
            </Provider>
        );

        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hola pruebas'
            }
        });

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect( eventStartAddNew ).toHaveBeenCalledWith({
            end: expect.anything(),
            start: expect.anything(),
            title: 'Hola pruebas',
            notes: ''
        });
        expect( eventClearActiveEvent ).toHaveBeenCalled();
    });
   
    test('Debe de validar las fechas', () => {
        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hola pruebas'
            }
        });
        const hoy = new Date();
        act(() => {
            wrapper.find('DateTimePicker').at(1).prop('onChange')(hoy);
        });

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });
        expect( Swal.fire ).toHaveBeenCalledWith('Error', 'La fecha fin debe ser mayor a la fecha de inicio', 'error');
    });
    
});
