import React from "react";
import styles from "./Banner.module.css";

function Banner({ img, color }) {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url(/img/guitarra.png)` }}
    >
      <div className={styles.gradient} style={{ background: `${color}` }}></div>
    </div>
  );
}

export default Banner;
