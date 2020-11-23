import '@testing-library/jest-dom';
import { types } from '../../types/types';

describe('Pruebas en los tipos', () => {
    
    const test_types = {
        // Types para auth
        login: '[Auth] Login',
        logout: '[Auth] Logout',
    
        // Types para ui
        uiSetError: '[UI] Set Error',
        uiRemoveError: '[UI] Remove Error',
        uiStartLoading: '[UI] Start Loading',
        uiFinishLoading: '[UI] Finish Loading',
    
        // Types para el journal
        notesAddNew: '[Notes] New Note',
        notesActive: '[Notes] Set Active Note',
        notesLoad: '[Notes] Load Notes',
        notesUpdate: '[Notes] Update note',
        notesFileUrl: '[Notes] Updated image url',
        notesDelete: '[Notes] Delete note',
        notesLogoutCleaning: '[Notes] Logout Cleaning'
    
    };

    test('Los tipos deben de ser los mismos', () => {
        expect(types).toEqual(test_types);
    });

});
