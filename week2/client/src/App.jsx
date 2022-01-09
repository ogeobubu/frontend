import { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Modal from "./components/Modal/Modal";
import Upload from "./components/Upload";
import "sweetalert2/dist/sweetalert2.css";

function App() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(null);

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
        setUrl={setUrl}
        data={data}
        url={url}
      />
      <Gallery url={url} />
    </div>
  );
}

export default App;
