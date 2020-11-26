import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';

import { db } from "../../firebase/firebaseConfig";
import { startLoadingNotes, startNewNote, startSaveNote } from '../../actions/notes';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: 'TESTING'
    }
};
// El estado del store en este instante
let store = mockStore(initState);

module.exports = {
    testEnvironment: "./__test-utils__/custom-jest-environment.js",
}

describe('Pruebas en notes - Action', () => {

    beforeEach( () =>{
        store = mockStore({
            auth: {
                uid: 'TESTING'
            }
        })
    });
   
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
    
    test('startLoadingNotes debe cargar las notas', async() => {
       await store.dispatch( startLoadingNotes('TESTING') );
       console.log('Hola');
       const actions = store.getActions();
       console.log('Mundo');

        expect( actions[0] ).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),
        }

        expect( actions[0].payload[0] ).toMatchObject( expected );    
    });
    
    test('startSaveNote debe de actualizar la nota', async() => {
        const note = {
            id: 'aWnKPVq5H2Sk5t1bbCcV',
            title:'titulo1',
            body:'body'
        };

        await store.dispatch(startSaveNote(note));
        const actions = store.getActions();
        
        const docRef = await db.doc(`/TESTING/journal/notes/${ note.id }`).get();

        expect(docRef.data().title).toBe(note.title);
    });
    
});
