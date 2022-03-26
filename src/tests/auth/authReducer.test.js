import { useReducer } from 'react';
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/';


describe('Pruebas en auth reducer', ()=> {
    
    const payload = {
        name: 'Juan',
    }

    
    test('debe de retornar el estado por defecto', () => {
        const state = authReducer( {logged: false}, {} )
        expect(state).toEqual({logged: false});
    })

    test('debe de autenticar y colocar el name del usuario', () => {
        
        const action = {
            type: types.login,
            payload,
        }

        const state = authReducer( {logged: false}, action )
        expect(state).toEqual({
            name: 'Juan',
            logged: true,
        })
    })

    test('debe de borrar usuario y log en false', () => {
        const action = {
            type: types.logout,
        }

        const state = authReducer( {logged: true, name: 'Pepe'}, action )
        expect(state).toEqual({ logged: false })
    })
    
})