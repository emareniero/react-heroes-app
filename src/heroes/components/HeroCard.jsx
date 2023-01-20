import { Link } from "react-router-dom";

// Evaluamos si el mismo actor hizo a su vez otros personajes
const CharactersByHero = ({ alter_ego, characters }) => {
  // Si solo hizo un solo personaje no devolvemos nada
//   if (alter_ego === characters) return <></>;

  // Si hizo otros personajes devolvemos los que hizo
//   return <p>{characters}</p>;
return ( alter_ego === characters )
    ? <></>
    : <p>{characters}</p>;
};

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
  // Creamos el path de la imagen. Cuando viene del root ponemos directamente /
  const heroImgUrl = `/assets/heroes/${id}.jpg`;

  // Creamos un constante para mostrar los personajes por actor
  //   const caracterByHero = (<p>{characters}</p>);

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          {/* Imágen  */}
          <div className="col-4">
            <img src={heroImgUrl} className="card-img" alt={superhero} />
          </div>

          {/* Texto  */}
          <div className="col-8">
            <div className="card-body">
              {/* Información del personaje y del actor  */}
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {/* Mostramos los personajes que represento solo si son distintos al alter_ego  */}
              {/* {alter_ego !== characters && caracterByHero} */}
              <CharactersByHero characters={characters} alter_ego={alter_ego} />

              {/* Mostramos la primera vez que aparececio este personaje en los comics  */}
              <p className="card-text">
                <small className="text-muted"> {first_appearance} </small>
              </p>

              {/* Creamos un link para ver mas detalles del personaje  */}
              <Link to={`/hero/${id}`}>More...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
