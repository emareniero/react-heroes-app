import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe("Pruebas en PrivateRoute", () => {
  test("si estoy autenticado debe mostrar el children", () => {

    // Cremaos una función ficticia del local storga de la siguiente manera
    Storage.prototype.setItem = jest.fn();

    // Creamos las condiciones del estado iniicial
    const contextValue = {
      logged: true,
      user: {
        id: "123",
        name: "Emanuel",
      },
    };

    // Renderizamos el componente y simulamos que si esta loggeado muestre un h1
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <PrivateRoute>
            <h1>Ruta Privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // screen.debug();

    // revisamos que solo muestre el h1 si esta loggeado
    expect(screen.getByText("Ruta Privada")).toBeTruthy();

    // REvisamos que el local storage haya sido llamado
    expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/marvel")

  });
});
