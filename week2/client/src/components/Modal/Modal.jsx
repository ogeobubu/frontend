import React from "react";
import { motion } from "framer-motion";
import styles from "./modal.module.scss";
import picture from "../../assets/picture.jpg";
import { Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { removeId } from "../../redux/urlSlice.js";

const Modal = ({ singleImage }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (e.target.classList.contains("_backdrop_b8c04_1")) {
      dispatch(removeId());
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
        src={singleImage.image}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
