import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe("Pruebas en AppRouter", () => {
  test("debe mostrar el login sin no esta autenticado", () => {
    // creamos el estado inicial autenticado
    const contextValue = {
      logged: false,
    };

    // renderizamos el componente
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    // screen.debug();

    // evaluamos
    expect(screen.getAllByText("Login").length).toBe(2);
  });

  test("debe mostrar el componente de marvel si esta autenticado", () => {
    // creamos el estado inicial autenticado
    const contextValue = {
      logged: true,
      user: {
        id: '123',
        name: 'ema'
      }
    };

    // renderizamos el componente
    render(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={['/login']}>
            <AppRouter></AppRouter>
          </MemoryRouter>
        </AuthContext.Provider>
      );

    // screen.debug();

     // revisamos que solo muestre el h1 si esta loggeado
     expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
  });



});
