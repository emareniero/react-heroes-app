import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Ruta hacia el login  */}
        <Route
          // path="/login"
          path="/login/*"
          element={
            <PublicRoute>
              {/* <LoginPage /> */}
              <Routes>
                <Route path="/*" element={<LoginPage />} />
              </Routes>
            </PublicRoute>
          }
        />

        {/* Ponemos las rutas privadas donde corresponden */}
        <Route
          path="/*"
          element={
            <>
              <PrivateRoute>
                {/* Ruta para ir por los heroes */}
                <HeroesRoutes />
              </PrivateRoute>
            </>
          }
        />
      </Routes>
    </>
  );
};
