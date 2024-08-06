import React from "react";
import styles from "./pie.module.css";
import logo from "./Copia de logo gris medio 2.png";

function Pie() {
  return (
    <footer className={styles.Pie}>
      <h2>Desarrollado por KLoreley Trejo</h2>
      <section className={styles.logoContainer}>
        <img src={logo} alt="Logo Loreley" />
      </section>
    </footer>
  );
}

export default Pie;
