import { useState } from "react";

// Creamos nuestro custom hook con un objeto inicial recibido
export const useForm = (initialForm = {}) => {
  // Creamos el estado inicial del form
  const [formState, setFormState] = useState(initialForm);

  // Creamos la funcióin par acontro el input y desestructuramos el target
  const onInputChange = ({ target }) => {
    // Sacamos del targe lo que nos interesa
    const { name, value } = target;
    // Actualizamos el form con lo que nos interesa
    setFormState({
      ...formState, // El resto de las propiedades igual
      [name]: value, // Asi deciemos que queremos acutalizar el valor de la propiedad name, esto es una prop de JS
    });
  };

  // Borramos con el boton
  const onResetForm = () => {
    // limpiamos el formulario
    setFormState(initialForm);
  };

  // Devolvemos lo qu queremos exponer al exterior de la función
  return {
    ...formState, // contiene el username, email y password
    formState,
    onInputChange,
    onResetForm,
  };
};