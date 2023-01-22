import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../auth/context/AuthContext";

// Le enviamos los componentes que van a estar debajo de este componente a traves del children
export const PrivateRoute = ({ children }) => {
  // Tomamos el user para ver si esta logged o no y de esa forma vemos si puede o no visitar ciertos links
  const { logged } = useContext(AuthContext);
  // Vamos a usara el useLocation para recordar la página anterior en la que estaba
  const { pathname, search } = useLocation();
  console.log(location); // Chequeamos que hy en location y vemos que hay path y search
  // definimos el último path
  const lastPath = pathname + search;
  // Guarddamos el lastPath en el localStorage
  localStorage.setItem('lastPath', lastPath);

  // Devolvemos los hijos si esta autorizado
  return logged ? children : <Navigate to="/login" />;
};
