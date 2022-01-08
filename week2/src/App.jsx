import { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Modal from "./components/Modal/Modal";
import Upload from "./components/Upload";

function App() {
  return (
    <div className="container">
      <h1 className="title">Momenary</h1>
      <p className="instruction">
        Upload your picture collection by clicking the upload button below.
        Click on image to view added images in thumbnail.
      </p>
      <Upload />
      <Gallery />
    </div>
  );
}

export default App;
