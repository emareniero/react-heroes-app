import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  // Buscamos todos los héroes que coinciden con el publisher que nos han solicitado
  // memorizamos por que sabemos que la lista no va a cambiar frecuente menete, o al menos que cambia solo si es necesario
  const heroes = useMemo( () =>  getHeroesByPublisher(publisher), [publisher] );

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
