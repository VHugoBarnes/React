import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { CalendarScreen } from '../../../components/calendar/CalendarScreen';
import { messages } from '../../../helpers/calendar-messages-esp';
import { uiOpenModal } from '../../../actions/ui';
import { eventSetActive, eventClearActiveEvent, eventStartLoading } from '../../../actions/events';
import { act } from '@testing-library/react';

jest.mock('../../../actions/ui', () => ({
    uiOpenModal: jest.fn()
}));

jest.mock('../../../actions/events', () => ({
    eventSetActive: jest.fn(),
    eventClearActiveEvent: jest.fn(),
    eventStartLoading: jest.fn()
}));

Storage.prototype.setItem = jest.fn();

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
        const calendar = wrapper.find('Calendar');

        const calendarMessages = calendar.prop('messages');
        expect( calendarMessages ).toEqual(messages);

        calendar.prop('onDoubleClickEvent')();
        expect( uiOpenModal ).toHaveBeenCalled();

        calendar.prop('onSelectEvent')({start: 'Hola'});
        expect( eventSetActive ).toHaveBeenCalledWith( {start: 'Hola'} );

        act(() => {
            calendar.prop('onView')('week');
            expect( localStorage.setItem ).toHaveBeenCalledWith( 'lastView', 'week' );
        });

    });
    
});
