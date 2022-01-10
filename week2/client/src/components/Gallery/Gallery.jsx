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

const Gallery = ({ url, images, setImages }) => {
  const [filteredArr, setFilteredArr] = useState([]);

  return (
    <section className={styles.images}>
      {images.map(({ _id, image }) => (
        <GalleryItem
          id={_id}
          key={_id}
          image={image}
          setImages={setImages}
          images={images}
          setFilteredArr={setFilteredArr}
        />
      ))}
    </section>
  );
};

export default Gallery;
