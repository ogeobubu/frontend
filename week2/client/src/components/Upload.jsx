import React, { useState, useEffect } from "react";
import styles from "./upload.module.scss";
import Swal from "sweetalert2";
import ProgressBar from "./ProgressBar/ProgressBar";
import axios from "axios";

const Upload = ({ file, data, setFile, setData, setUrl, url }) => {
  const types = ["image/png", "image/jpeg"];

  useEffect(() => {
    if (file) {
      const uploadFile = async () => {
        try {
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/ogeobubu/image/upload",
            data
          );
          console.log(response.data);
          setUrl(response.data.url);

          const sendData = {
            image: url,
          };

          const postDB = await axios.post(
            "http://localhost:5000/api/images",
            sendData
          );
          Swal.fire({
            icon: "success",
            title: "Success",
            text: postDB.data.message,
          });
        } catch (error) {
          setFile(null);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Network Error. Check internet connection and try again.",
          });
        }
      };
      uploadFile();
    }
  }, [file]);

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      const data = new FormData();
      data.append("file", selected);
      data.append("upload_preset", "interview");
      data.append("cloud_name", "ogeobubu");
      setData(data);
      console.log(data);
    } else {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select an image file (png or jpg)",
      });
    }
  };
  return (
    <>
      <form>
        <div className={styles.buttonContainer}>
          <label className={styles.button} htmlFor="fusk">
            Upload
          </label>
        </div>

        <input
          style={{ display: "none" }}
          id="fusk"
          type="file"
          onChange={handleChange}
        />

        <div className={styles.output}>
          {file && <p>{file.name}</p>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </>
  );
};

export default Upload;
