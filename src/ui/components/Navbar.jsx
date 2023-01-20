import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  // Ahora vamos a hacer uso del useNavigate que es un custom Hook de React-Router-Dom
  const navigate = useNavigate();

  // Creamos la función para hacer logout al clickear
  const onLogOut = () => {
    // usamos la función navigate para decidir donde queremos ir
    // si le agregamos el replace: true la persona no va apoder volver a la pag anterior
    // lo cual es válido en un logout
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Associations
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/marvel">
            Marvel
          </NavLink>

          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/dc">
            DC
          </NavLink>

          /* <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`} to="/search">
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">Emanuel</span>
          <button className="nav-item nav-link btn" onClick={onLogOut}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
