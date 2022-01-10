import express from "express";
import {
  getImages,
  postURL,
  deleteImage,
  getImage,
} from "../controllers/images.js";

const router = express.Router();

router.get("/", getImages);
router.get("/:id", getImage);
router.post("/", postURL);
router.delete("/:id", deleteImage);

export default router;
