import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';

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
    });
    
});
