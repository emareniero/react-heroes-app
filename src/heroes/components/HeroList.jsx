import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const HeroList = ({ publisher }) => {

    // Buscamos todos los héroes que coinciden con el publisher que nos han solicitado
    const heroes = getHeroesByPublisher( publisher );

  return (
    <>
     <ul>
        { heroes.map( hero => <li key={ hero.id }>{hero.superhero}</li> )}
      </ul>
    </>
  )
}
