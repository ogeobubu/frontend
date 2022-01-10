import Image from "../models/Image.js";

export const getImages = async (req, res) => {
  try {
    const images = await Image.find().sort({ date: -1 });
    return res.status(200).json({
      message: images,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const getImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    return res.status(200).json({
      message: image,
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

export const deleteImage = async (req, res) => {
  const image = await Image.findByIdAndDelete(req.params.id);

  try {
    if (!image) {
      return res.status(400).json({
        message: "This image does not exists",
      });
    } else {
      return res.status(200).json({
        message: "This image has successfully been deleted.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
