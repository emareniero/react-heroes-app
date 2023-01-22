import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  // Traemos el contexto que hemos definido
  const { login } = useContext( AuthContext )

  // creamos una función del useNavigate de la gente de rrd
  const navigate = useNavigate();

  // creamos el método para navegar al inicio de la página
  const onLogin = () => {
    // Revisamos el lastPath para navegar al mismo lugar si cerramos sesion
    const lastPath = localStorage.getItem('lastPath') || '/'

    // le mandamos un nombre par asaber quien se esta loggeando
    login( 'Ema Reniero' )

    // decimos donde queremos ir y borramos el hist para que no pueda ir hacia atras
    navigate( lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
