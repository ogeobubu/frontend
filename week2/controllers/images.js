import Image from "../models/Image.js";

export const getImages = async (req, res) => {
  try {
    const images = await Image.find();
    return res.status(200).json({
      message: images,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const postURL = async (req, res) => {
  const { image } = req.body;

  const data = {
    image,
  };

  try {
    const createImage = await Image.create(data);

    createImage.save();

    return res.status(201).json({
      message: "Image has been uploaded successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
