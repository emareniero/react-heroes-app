import { heroes } from "../data/heores";

export const getHeroeByName = (name = "") => {
  // pasamos el name toLowerCase()
  name = name.toLocaleLowerCase().trim();

  // Chequeamos si la persona busco algo
  if (name.length === 0) return [];

  //  filtramos el arreglo según la busqueda
  return heroes.filter((heroe) => heroe.superhero.toLocaleLowerCase().includes(name));
};
