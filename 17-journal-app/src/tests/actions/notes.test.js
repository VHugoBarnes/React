import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';

import { db } from "../../firebase/firebaseConfig";
import { startNewNote } from '../../actions/notes';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// El estado del store en este instante
const store = mockStore({
    auth: {
        uid: 'TESTING'
    }
});

describe('Pruebas en notes - Action', () => {
   
    test('Debe de crear una nueva nota startNewNote', async() => {
        await store.dispatch( startNewNote() );
        // Contiene un arreglo [] con las acciones llamadas. En este caso,
        // activeNote y addNewNote
        const actions = store.getActions();
        
        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number),
            }
        });

        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number),
            }
        });

        const id = actions[0].payload.id;
        await db.doc(`TESTING/journal/notes/${id}`).delete();
    });
    
});
