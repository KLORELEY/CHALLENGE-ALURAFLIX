import React from "react";
import { Link } from "react-router-dom";
import styles from "./cabecera.module.css"; // Asegúrate de que el nombre y la ruta sean correctos
import logo from "./Copia de logo gris medio.png";
import CabeceraLink from "components/CabeceraLink/CabeceraLink";

function Cabecera() {
  return (
    <header className={styles.Cabecera}>
      <Link to="/">
        <section className={styles.logoContainer}>
          <img src={logo} alt="Logo Loreley" className={styles.logo} />
          {"logo"}
        </section>
      </Link>
      <nav className={styles.nav}>
        <CabeceraLink url="/">Home</CabeceraLink>
        <CabeceraLink url="/nuevo-video">Nuevo Video</CabeceraLink>
      </nav>
    </header>
  );
}

export default Cabecera;
