import { heroes } from "../data/heores";

export const getHeroesByPublisher = (publisher) => {
  console.log(publisher)
  // Cremoas un constante con los publisher válidos
  const validPublishers = ["DC Comics", "Marvel Comics"];
  // Verificamos si los publisher que vienen son válidos
  if (!validPublishers.includes(publisher)) {
    // Si no son válidos tiramos un aviso
    throw new Error(`${publisher} is not a valid publisher`);
  }
  // Si existen, devolvelos los que corresponden al pblisher recibido
  return heroes.filter( heroe => heroe.publisher === publisher );
};
