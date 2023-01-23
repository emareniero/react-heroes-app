import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

describe("Pruebas en el PublicRoute", () => {
  test("si no estoy autenticado debe mostrar el children", () => {
    // Creamos las condiciones del estado iniicial
    const contextValue = {
      logged: false,
    };

    // Renderizamos el componente y simulamos que si esta loggeado muestre un h1
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta Pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );
    // screen.debug();

    // revisamos que solo muestre el h1 si esta loggeado
    expect(screen.getByText("Ruta Pública")).toBeTruthy();
  });

  test("debe navegar si esta autenticado", () => {
    // Creamos las condiciones del estado iniicial
    const contextValue = {
      logged: true,
      user: {
        name: "Eman",
        id: "123ssd",
      },
    };

    // Renderizamos el componente y simulamos que si esta loggeado muestre un h1
    render(
        // Esta primera línea proporciona el contexto 
      <AuthContext.Provider value={contextValue}>
        {/* Esta línea nos proporciona el estado inicial */}
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <h1>Ruta Pública</h1>
                </PublicRoute>
              }
            />
            {/* Comom el estado esta logueado debería irse a marvel no a login  */}
            <Route path="/marvel" element={<h1>Página Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // screen.debug();

    // Hacemos el test y chequeamos que vaya a la pagina de marvel
    expect( screen.getByText('Página Marvel') ).toBeTruthy();

  });
});
