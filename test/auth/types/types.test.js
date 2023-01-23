import { types } from "../../../src/auth/types/types"

describe('Pruebas en types', () => {

    test('debe regresar estos types', () => {

        // Chequeamos que los types sean iguales a los que definimos aquí
        expect( types ).toEqual( {
            login: '[AUTH] Login',
            logout: '[AUTH] Logout',
        } )

    })

})