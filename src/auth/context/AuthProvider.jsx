import { useReducer } from "react";

import { authReducer } from "./authReducer";
import { AuthContext } from "./AuthContext";

import { types } from "../types/types";

// Definimos un identificador para saber si tamos logged in or out
// const initialState = {
//   logged: false,
// };

// Creamos la funcion para inicializar el estado
const init = () => {
  // creamos el user
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user, // Si el user existe da true la doble negacion
    user,
  };
};

// Creamos el proveedor de contexto del AuthContext.jsx
export const AuthProvider = ({ children }) => {
  // Utilizamos el reducer
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  // creamos la constante par identificar el usuario
  const login = (name = "") => {
    // Creamos el usuario
    const user = { id: "ABC", name };

    // creamos una acción de tipo login
    const action = { type: types.login, payload: user };

    // Almacenamos el usuario que esta ingresado en el local storage
    localStorage.setItem("user", JSON.stringify(user));

    // manmos la accioón a traves del dispatch
    dispatch(action);
  };

  // Creamos el logout
  const logout = () => {
    localStorage.removeItem('user');
    const action = { type: types.logout };
    dispatch( action );
  }

  return <AuthContext.Provider value={{ 
      ...authState, 

      // Métodos
      login: login, 
      logout: logout 
  }}>{children}</AuthContext.Provider>;
};
