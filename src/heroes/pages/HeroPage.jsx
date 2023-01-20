import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  // Creamos una variable para la navegación
  const navigate = useNavigate();

  // Creamos una variable para obtener los parametros
  const { id } = useParams();

  // llamaos la función que buscar el heroe
  // se podría memorizar esta función para que no se redibuje ante un cmabio
  // de esta manera solo se ejecuta si cambia el id
  const hero = useMemo( () => getHeroById( id ), [id] ); 
  // console.log(hero)
  
  // Creamos la función para ir a la pagina anterir al cliquear
  const onNavigateBack = () => {

    // vemos a que pagina vamos segun si es de dc o marvel
    // id.includes('dc') ? navigate('/dc') : navigate('/marvel')
    navigate(-1);

  }

  // Vamos a chequerar que exita heroe porque sino vamos querer renderizar undefind.name por ejemplo
  // y nos va a tiarar un error
  if ( !hero ) {
    return <Navigate to="/marvel" />
  }
  


  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src= {`/assets/heroes/${ id }.jpg`} 
          alt={ hero.superhero  } 
          className="img-thumbnail animate__animated animate__fadeInLeft animate__faster" />
      </div>

      <div className="col-8 animate__animated animate__fadeInRight animate__faster">
        <h3> { hero.superhero } </h3>
        <hr />
        <ul className="lits-group lsit-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> { hero.alter_ego } </li>
          <li className="list-group-item"> <b>Publisher:</b> { hero.publisher } </li>
          <li className="list-group-item"> <b>First appearance:</b> { hero.first_appearance } </li>
        </ul>
         
        <h5 className="mt-3">Characters</h5>
        <hr />
        <p>{ hero.characters }</p>

        <button 
          className="btn btn-outline-primary"
          onClick={onNavigateBack}>Go back!</button>

      </div>

    </div>
  );
};
