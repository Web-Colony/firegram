import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const imageTypes = ["image/png", "image/jpeg"];

  const OnFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && imageTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please upload image file (png or jpeg)");
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={OnFileChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="error">{file.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;
