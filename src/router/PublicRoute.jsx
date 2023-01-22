import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

// Le enviamos las rutas hijas que sean públicas
export const PublicRoute = ({ children }) => {
  // usamos el useContext para verificar el estado del usuario
  const { logged } = useContext(AuthContext);

  // Devolvemos los hijos si esta autorizado
  return !logged ? children : <Navigate to="/marvel" />;
};
