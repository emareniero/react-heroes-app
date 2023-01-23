import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";


// Creamos la función del mock
const mockUseNavigate = jest.fn();

// Acá hacemos un mock de la librería
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // Usamo todo lo que trae la librearía
    useNavigate: () => mockUseNavigate // Solo modficamos el useNavigate de la misma
}))

describe("Pruebas en Navbar", () => {
  // creamos el estado inicial autenticado
  const contextValue = {
    logged: true,
    user: {
      id: "123",
      name: "Emanueeeel",
    },
    logout: jest.fn(),
  };

   // Limpiamos todas las funciones en cada test
   beforeEach(() => jest.clearAllMocks())

  test("debe mostrar el nombre del usuario loggeado", () => {
    // renderizamos el componente
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Navbar></Navbar>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // screen.debug();
    // evaluamos
    expect(screen.getByText("Emanueeeel").innerHTML).toBeTruthy();
  });

  test("debe llamar el logout y el navigate al apretar el boton", () => {

    // renderizamos el componente
    render(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={["/login"]}>
            <Navbar></Navbar>
          </MemoryRouter>
        </AuthContext.Provider>
      );

      // Buscamos el boton y lo clickeamos
      const logoutButton = screen.getByRole('button');
      fireEvent.click( logoutButton );

      // Revisamos si se llamo a la fucnión de logout
      expect( contextValue.logout ).toHaveBeenCalled();
      // Chequeamos que el logout hya sido llamdo
      expect( mockUseNavigate ).toHaveBeenCalledWith(  "/login", {"replace": true} )



  });
});
