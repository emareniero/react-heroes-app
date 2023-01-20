import { heroes } from "../data/heores";

// función para buscar el heroe según el id
export const getHeroById = (id) => {
  // buscamos el heroe que coincide con el id
  return heroes.find((hero) => hero.id === id);
};
