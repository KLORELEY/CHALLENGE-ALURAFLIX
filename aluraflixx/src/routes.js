import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "pages/Inicio";
import NuevoVideo from "components/NuevoVideo";
import Cabecera from "components/cabecera/cabecera";
import Container from "components/Container";
import Pie from "components/Pie";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecera />
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nuevo-video" element={<NuevoVideo />} />
        </Routes>
      </Container>
      <Pie />
    </BrowserRouter>
  );
}
export default AppRoutes;
