import React, { useState } from "react";
import styles from "./NuevoVideo.module.css";
import axios from "axios";

function NuevoVideo() {
  const [formValues, setFormValues] = useState({
    titulo: "",
    category: "",
    capa: "",
    link: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (
      !formValues.titulo ||
      !formValues.category ||
      !formValues.capa ||
      !formValues.link
    ) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/videos",
        formValues
      );
      console.log(response.data);
      setSuccess("Video guardado exitosamente!");
      setFormValues({
        titulo: "",
        category: "",
        capa: "",
        link: "",
      });
    } catch (error) {
      console.error("Error al guardar el video:", error);
      setError("Error al guardar el video");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Nuevo Video</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={formValues.titulo}
              onChange={handleChange}
              placeholder="Ingrese el título"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="category">Categoría</label>
            <select
              id="category"
              name="category"
              value={formValues.category}
              onChange={handleChange}
            >
              <option value="">Seleccione una categoría</option>
              <option value="60">60´s</option>
              <option value="70">70´s</option>
              <option value="80">80´s</option>
              <option value="90">90´s</option>
              <option value="2000">2000´s</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="capa">Imagen</label>
            <input
              type="text"
              id="capa"
              name="capa"
              value={formValues.capa}
              onChange={handleChange}
              placeholder="Ingrese el enlace de la imagen"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="link">Video</label>
            <input
              type="text"
              id="link"
              name="link"
              value={formValues.link}
              onChange={handleChange}
              placeholder="Ingrese el enlace del video"
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}
          {success && <p className={styles.success}>{success}</p>}
          <div className={styles.formActions}>
            <button type="submit" className={styles.guardar}>
              Guardar
            </button>
            <button
              type="reset"
              className={styles.limpiar}
              onClick={() =>
                setFormValues({
                  titulo: "",
                  category: "",
                  capa: "",
                  link: "",
                })
              }
            >
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NuevoVideo;
