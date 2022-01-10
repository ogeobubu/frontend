import { useState, useEffect } from "react";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Modal from "./components/Modal/Modal";
import Upload from "./components/Upload";
import "sweetalert2/dist/sweetalert2.css";
import axios from "axios";
import { useSelector } from "react-redux";

function App() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [images, setImages] = useState([]);
  const [singleImage, setSingleImage] = useState({});
  const url = useSelector((state) => state.url.urlLink);
  const id = useSelector((state) => state.url.id);

  useEffect(() => {
    const getImages = async () => {
      const response = await axios.get("http://localhost:5000/api/images");
      setImages(response.data.message);
    };
    getImages();
  }, [url]);

  useEffect(() => {
    if (id) {
      const getImage = async () => {
        const response = await axios.get(
          `http://localhost:5000/api/images/${id}`
        );
        setSingleImage(response.data.message);
        console.log(response.data.message);
      };
      getImage();
    }
  }, [id]);

  return (
    <div className="container">
      <h1 className="title">Momenary</h1>
      <p className="instruction">
        Upload your picture collection by clicking the upload button below.
        Click on image to view added images in thumbnail.
      </p>
      <Upload
        file={file}
        setFile={setFile}
        setData={setData}
        data={data}
        url={url}
        setImages={setImages}
        images={images}
      />
      <Gallery url={url} images={images} setImages={setImages} />
      {id && <Modal singleImage={singleImage} />}
    </div>
  );
}

export default App;
