import React from "react";
import { motion } from "framer-motion";
import styles from "./modal.module.scss";
import picture from "../../assets/picture.jpg";
import { Delete } from "@mui/icons-material";

const Modal = ({ setSelectedImg, selectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains(`backdrop`)) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className={styles.backdrop}
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={picture}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      <Delete className={styles.deleteIcon} />
    </motion.div>
  );
};

export default Modal;
