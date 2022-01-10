import React, { useState } from "react";
import styles from "./galleryItem.module.scss";
import { Delete } from "@mui/icons-material";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { getId } from "../../redux/urlSlice.js";

const GalleryItem = ({ id, image, setImages, images }) => {
  const dispatch = useDispatch();

  const handleClick = (param) => {
    if (param) {
      dispatch(getId(param));
    } else {
      return null;
    }
  };

  const handleDelete = async (id) => {
    if (id) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/images/${id}`
        );
        const filteredImages = images.filter((image) => image._id !== id);
        setImages(filteredImages);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message,
        });
      } catch (error) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response?.data?.message,
        });
      }
    } else {
      return null;
    }
  };
  return (
    <div className={styles.image}>
      <img
        src={image}
        alt={id}
        className={styles.pic}
        onClick={() => handleClick(id)}
      />
      <Delete onClick={() => handleDelete(id)} className={styles.deleteIcon} />
    </div>
  );
};

export default GalleryItem;
