import React, { useEffect, useState } from "react";
import styles from "./gallery.module.scss";
import picture from "../../assets/picture.jpg";
import GalleryItem from "./GalleryItem";
import axios from "axios";

const data = [
  {
    id: 1,
    image: picture,
  },
  {
    id: 2,
    image: picture,
  },
  {
    id: 3,
    image: picture,
  },
  {
    id: 4,
    image: picture,
  },
  {
    id: 5,
    image: picture,
  },
  {
    id: 6,
    image: picture,
  },
  {
    id: 7,
    image: picture,
  },
];

const Gallery = ({ url }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getImages = async () => {
      const response = await axios.get("http://localhost:5000/api/images");
      setImages(response.data.message);
    };
    getImages();
  }, [url]);
  return (
    <section className={styles.images}>
      {images.map(({ _id, image }) => (
        <GalleryItem key={_id} image={image} />
      ))}
    </section>
  );
};

export default Gallery;
