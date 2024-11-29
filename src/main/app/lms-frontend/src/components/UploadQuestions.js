import React, { useState } from 'react';
import "./UploadQuestions.css";

const UploadQuestions = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);

    const response = await fetch('http://localhost:8090/api/upload-questions', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Questions uploaded successfully.');
    } else {
      alert('Failed to upload questions.');
    }
  };

  return (
    <div className="upload-questions">
      <div className="page-header">
        <h1>Upload Questions</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadQuestions;
