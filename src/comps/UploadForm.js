import ProgressBar from "./ProgressBar";
import React from "react";
import { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const types = ["image/png", "image/jpeg"]; //tipos permitidos
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg");
    }
  };

  return (
    <form>
      <label htmlFor="file">
        <input type="file" name="" id="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
