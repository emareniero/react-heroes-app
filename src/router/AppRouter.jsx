import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Ruta hacia el login  */}
        <Route path="login" element={<LoginPage />} />

        {/* Ruta para ir por los heroes */}
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
