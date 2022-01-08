import React from "react";
import styles from "./galleryItem.module.scss";
import { Delete } from "@mui/icons-material";

const GalleryItem = ({ id, image }) => {
  return (
    <div key={id} className={styles.image}>
      <img src={image} alt={id} className={styles.pic} />
      <Delete className={styles.deleteIcon} />
    </div>
  );
};

export default GalleryItem;
