import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

// Creamos la función del mock
const mockUseNavigate = jest.fn();

// Acá hacemos un mock de la librería
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // Usamo todo lo que trae la librearía
  useNavigate: () => mockUseNavigate, // Solo modficamos el useNavigate de la misma
}));

describe("Pruebas en SearchPage", () => {
  // Limpiamos todas las funciones en cada test
  beforeEach(() => jest.clearAllMocks());

  test("debe mostrarse correctamente con valores por defecto", () => {
    // Renderizamos nuestra pagina y tomamos el container para sacarle una foto
    const { container } = render(
      <MemoryRouter>
        <SearchPage></SearchPage>
      </MemoryRouter>
    );

    // Evaluamos que la pagina quede siempre igual
    expect(container).toMatchSnapshot();
    // screen.debug();
  });

  test("debe mostrar a batman y el input con el valor del queryString", () => {
    // Renderizamos nuestra pagina
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage></SearchPage>
      </MemoryRouter>
    );
    // screen.debug();

    // Chequeamos que el inputext tenga el valor de batman
    const input = screen.getByRole("textbox");
    expect(input.value).toBe("batman");

    // Reviamos que muestra el url de la imagen
    const img = screen.getByRole("img");
    expect(img.src).toContain("/heroes/dc-batman.jpg");

    // revismoa que si hay busqueda no haya aviso de que no se encontro nada
    const alertDanger = screen.getByLabelText("alert-danger");
    expect(alertDanger.style.display).toBe("none");
  });

  test("debe mostrar error si no se muestra el hero (batman123)", () => {
    // Renderizamos nuestra pagina
    render(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <SearchPage></SearchPage>
      </MemoryRouter>
    );
    // screen.debug();

    // Debe desplegarse el error
    // revismoa que si hay busqueda no haya aviso de que no se encontro nada
    const alertDanger = screen.getByLabelText("alert-danger");
    expect(alertDanger.style.display).toBe("");
  });

  test("debe llamar el navigate a la pantalla nueva", () => {
    // Renderizamos nuestra pagina
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage></SearchPage>
      </MemoryRouter>
    );
    // screen.debug();

    // Tomaoms el input text
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { name: "searchText", value: "superman" } });
    // console.log(input.value)

    // Buscamos el formulario y disparamos
    const form = screen.getByRole("form");
    fireEvent.submit(form);

    // verificamos si se llamo lafuncion de navegacion
    expect( mockUseNavigate ).toHaveBeenCalledWith("?q=superman");
  });
});
