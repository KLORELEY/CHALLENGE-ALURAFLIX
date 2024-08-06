import React, { useState } from "react";
import styles from "./EditCardForm.module.css";

function EditCardForm({ cardData, onSave, onCancel }) {
  const [formData, setFormData] = useState(cardData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <form onSubmit={handleSubmit}>
          <h2>Editar Video</h2>
          <label>
            Título:
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
            />
          </label>
          <label>
            Categoría:
            <select
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
            >
              <option value="">Seleccione una categoría</option>
              <option value="60">60´s</option>
              <option value="70">70´s</option>
              <option value="80">80´s</option>
              <option value="90">90´s</option>
              <option value="2000">2000´s</option>
            </select>
          </label>
          <label>
            Imagen:
            <input
              type="text"
              name="capa"
              value={formData.capa}
              onChange={handleChange}
            />
          </label>
          <label>
            Video:
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={handleChange}
            />
          </label>
          <div className={styles.actions}>
            <button type="submit">Guardar</button>
            <button type="button" onClick={onCancel}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCardForm;
