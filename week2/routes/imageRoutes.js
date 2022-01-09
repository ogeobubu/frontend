import express from "express";
import { getImages, postURL } from "../controllers/images.js";

const router = express.Router();

router.get("/", getImages);
router.post("/", postURL);

export default router;
