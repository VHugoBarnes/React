import '@testing-library/jest-dom';
import { types } from '../../types/types';

describe('Pruebas en types.js', () => {
   
    test('Debe de ser iguales los types', () => {
       
        expect( types ).toEqual({
            // UI
            uiOpenModal: '[UI] Open modal',
            uiCloseModal: '[UI] Close modal',
        
            // Calendar
            eventLogout: '[Event] Event Logout',
            eventStartAddNew: '[Event] Start add new',
            eventAddNew: '[Event] Add new',
            eventSetActive: '[Event] Set active',
            eventClearActiveEvent: '[Event] Clear active event',
            eventUpdated: '[Event] Event updated',
            eventDeleted: '[Event] Event deleted',
            eventLoaded: '[Event] Events Loaded',
        
            // Auth
            authCheckingFinish: '[Auth] Finish Checking Login State',
            authStartLogin: '[Auth] Start Login',
            authLogin: '[Auth] Login',
            authStartRegister: '[Auth] Start Register',
            authStartTokenRenew: '[Auth] Start Token Renew',
            authLogout: '[Auth] Logout'
        });
        
    });    
    
});
