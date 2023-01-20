import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  // creamos una función del useNavigate de la gente de rrd
  const navigate = useNavigate();

  // creamos el método para navegar al inicio de la página
  const onLogin = () => {
    // decimos donde queremos ir y borramos el hist para que no pueda ir hacia atras
    navigate("/", {
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
