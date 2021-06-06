import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const fileTypes = ["image/png", "image/jpeg", "image/jpg"];

  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const fileHandler = (e) => {
    const selected = e.target.files[0];
    if (selected && fileTypes.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("please select an image file.");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={fileHandler} />
        <span>+</span>
      </label>
      {error && <div className="error">{error}</div>}
      {file && <div>{file.name}</div>}
      {file && <ProgressBar file={file} setfile={setFile} />}
    </form>
  );
};

export default UploadForm;
