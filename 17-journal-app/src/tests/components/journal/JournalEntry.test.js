import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
// Librerías para hacer test con thunk
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';

import { JournalEntry } from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';
import { types } from '../../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

// El estado del store en este instante
let store = mockStore(initState);
store.dispatch = jest.fn();

const nota = {
    id: 10,
    date: 0,
    title: 'Hola',
    body: 'mundo',
    url: 'https://algunlugar.com/foto.jpg',
};

const wrapper = mount(
    <Provider store={store}>
        <JournalEntry {...nota}/>
    </Provider>
);

describe('Pruebas en el <JournalEntry/>', () => {
   
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de activar la nota', () => {
       wrapper.find('.journal__entry').prop('onClick')();

       expect(store.dispatch).toHaveBeenCalledWith(
           activeNote( nota.id, { ...nota })
       );
    });
    
});
