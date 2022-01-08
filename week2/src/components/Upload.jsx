import React, { useState } from "react";
import styles from "./upload.module.scss";
import Swal from "sweetalert2";

const Upload = () => {
  const [file, setFile] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      console.log(selected);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select an image file (png or jpg)",
      });
    }
  };
  return (
    <>
      <form>
        <label className={styles.button} for="fusk">
          Upload
        </label>

        <input
          style={{ display: "none" }}
          id="fusk"
          type="file"
          onChange={handleChange}
        />

        <div className="output"></div>
      </form>
    </>
  );
};

export default Upload;
