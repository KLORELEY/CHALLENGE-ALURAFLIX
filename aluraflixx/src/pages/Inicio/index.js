import React, { useState, useEffect } from "react";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import EditCardForm from "components/EditCardForm/EditCardForm";
import styles from "./index.module.css";
import axios from "axios";

function Inicio() {
  const [videos, setVideos] = useState([]);
  const [editingVideo, setEditingVideo] = useState(null);

  const categories = {
    60: "60's",
    70: "70's",
    80: "80's",
    90: "90's",
    2000: "2000's",
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("http://localhost:3001/videos");
        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/videos/${id}`);
      setVideos(videos.filter((video) => video.id !== id));
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  const handleEdit = (id) => {
    const videoToEdit = videos.find((video) => video.id === id);
    setEditingVideo(videoToEdit);
  };

  const handleSave = async (updatedVideo) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/videos/${updatedVideo.id}`,
        updatedVideo
      );
      setVideos(
        videos.map((video) =>
          video.id === updatedVideo.id ? response.data : video
        )
      );
      setEditingVideo(null);
    } catch (error) {
      console.error("Error updating video:", error);
    }
  };

  const handleCancel = () => {
    setEditingVideo(null);
  };

  return (
    <div className={styles.wrapper}>
      <Banner img="BannerMain" color="black" />
      <Titulo>
        <h1>¡Los mejores rolones de todos los tiempos!</h1>
      </Titulo>
      <div className={styles.mainContent}>
        {Object.entries(categories).map(([key, category]) => (
          <section key={key} className={styles.container}>
            <h2 className={styles.categoryTitle}>{category}</h2>
            <div className={styles.cardContainer}>
              {videos
                .filter((video) => video.category === key)
                .map((video) => (
                  <Card
                    key={video.id}
                    id={video.id}
                    titulo={video.titulo}
                    capa={video.capa}
                    link={video.link}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                  />
                ))}
            </div>
          </section>
        ))}
        {editingVideo && (
          <EditCardForm
            cardData={editingVideo}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}
      </div>
    </div>
  );
}

export default Inicio;
