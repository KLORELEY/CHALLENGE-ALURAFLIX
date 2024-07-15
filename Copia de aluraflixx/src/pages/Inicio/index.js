import React, { useState } from "react";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import styles from "./index.module.css";
import initialVideos from "data/db.json";

function Inicio() {
  const [videos, setVideos] = useState(initialVideos);

  const handleDelete = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  const handleEdit = (id) => {
    console.log(`Edit video with id: ${id}`);
  };

  const categories = {
    60: "60's",
    70: "70's",
    80: "80's",
    90: "90's",
    2000: "2000's",
  };

  return (
    <div>
      <Banner img="BannerMain" color="black" />
      <Titulo>
        <h1>¡Los mejores rolones de todos los tiempos!</h1>
      </Titulo>
      {Object.entries(categories).map(([key, category]) => (
        <section key={key} className={styles.container}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          <div className={styles.cardContainer}>
            {videos
              .filter((video) => video.category === parseInt(key))
              .map((video) => (
                <Card
                  key={video.id}
                  {...video}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Inicio;
