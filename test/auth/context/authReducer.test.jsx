import { act } from "react-dom/test-utils";
import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe("Pruebas en authReducer", () => {
  test("debe retornar el estado por defecto", () => {
    // Chequeamos que devuelva el estado inicial
    const state = authReducer({ logged: false }, {});

    // Validamos
    expect(state).toEqual({ logged: false });
  });

  test("debe de (login) llamar el autenticador y establecer el user", () => {
    // Creamos una acción
    const action = {
      type: types.login,
      payload: {
        name: "Emanuel",
        id: "123",
      },
    };

    // Lllamos el auth reducer con el estado inicial en false y le mandamos la acción
    const state = authReducer({ logged: false }, action);

    // Ahora chequeamos que el estado haya cambiado a true
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("debe de (logout) borrar el nombre del usuario y logged en false", () => {
    // Creamos el estado iniicial como si estuviera loggeado
    const state = {
      logged: true,
      user: { id: "123", name: "Juan" },
    };

    // Creamos la accion
    const action = {
        type: types.logout
    }

    // Le mandamos la acción al authReducer
    const newState = authReducer( state, action );
    // console.log(newState)

    // validamos que cambie el estado a falso
    expect( newState ).toEqual({ logged: false })

  });
});
