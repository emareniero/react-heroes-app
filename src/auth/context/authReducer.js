import { types } from "../types/types";

// Definimos la función del reducer para manejar el estado
export const authReducer = (state = {}, action) => {
  // Manejamos los estados con un switch
  switch (action.type) {
    // Definimos el estado de logged in
    case types.login:
      return {
        ...state, // desestructuramos el state solo para cmabiar lo que nos interesa del mismo y no todo
        logged: true,
        user: action.payload,
      };

    // Definimos el estado de logged out
    case types.logout:
      return {
        logged: false,
      }

    default:
      return state;
  }
};
