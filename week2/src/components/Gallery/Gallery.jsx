import React from "react";
import styles from "./gallery.module.scss";
import picture from "../../assets/picture.jpg";
import GalleryItem from "./GalleryItem";

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

const Gallery = () => {
  return (
    <section className={styles.images}>
      {data.map(({ id, image }) => (
        <GalleryItem id={id} image={image} />
      ))}
    </section>
  );
};

export default Gallery;
