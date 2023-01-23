import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

import { HeroCard } from "../components";
import { heroes } from "../data/heores";
import { getHeroeByName } from "../helpers";
import { useForm } from "../hooks/useForm";

export const SearchPage = () => {
  // Cremaos una funcion para navegar
  const navigate = useNavigate();
  // Creamos una constante para obetener info de donde nos encontramos
  const location = useLocation();
  // creamos una constante para el query
  const { q = "" } = queryString.parse(location.search);
  // buscamos los heroes
  const heroes = getHeroeByName(q);

  // creamos validadores para cuando hay y no hay match en la busqueda
  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  // usamos el custom hook que hcimso antes
  const { searchText, onInputChange } = useForm({
    searchText: q, // le ponemos el q para que cuando carga por primera vez se ponga en cero
  });

  // creamos la busqueda cuando se apreta enter
  const onSearchSubmit = (ev) => {
    ev.preventDefault();

    // cehqueamos que haya texto
    // if (searchText.trim().length <= 1) return;

    // mandamos query parameter a la misma pagina donde estamos
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form aria-label="formu" onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="from-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
          </form>
          <button className="btn btn-outline-primary mt-3">Search</button>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {
            ( q === '' ) 
             ? <div className="alert alert-primary">Search a hero</div>
             : ( heroes.length === 0 ) && <div className="alert alert-danger">No hero with <b>{q}</b></div>
          } */}

          <div 
            className="alert alert-primary animate__animated animate__fadeIn animate__faster" 
            style={{ display: showSearch ? "" : "none" }}>
            Search a hero
          </div>

          <div 
            aria-label="alert-danger"
            className="alert alert-danger animate__animated animate__fadeIn animate__faster" 
            style={{ display: showError ? "" : "none" }}>
            No hero with <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
