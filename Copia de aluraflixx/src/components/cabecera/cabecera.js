import { Link } from "react-router-dom";
import styles from "./cabecera.module.css";
import logo from "./Copia de logo gris medio.png";
import CabeceraLink from "components/CabeceraLink/CabeceraLink";

function Cabecera() {
  return (
    <header className={styles.Cabecera}>
      <Link to="/">
        <section className={styles.logoContainer}>
          <img src={logo} alt="Logo Rock & Lover" /> <span></span>
        </section>
      </Link>
      <nav>
        <CabeceraLink url="./">Home</CabeceraLink>
        <CabeceraLink url="./">Nuevo video</CabeceraLink>
      </nav>
    </header>
  );
}

export default Cabecera;
