import React, { useState } from 'react';
import axios from 'axios';
import '../styles/UploadForm.css';

function UploadForm() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('description', description);
    formData.append('location', location);
    formData.append('userId', 'user123'); // Replace with actual user ID

    try {
      const response = await axios.post('http://localhost:8080/api/reports/upload', formData);
      setMessage('Report submitted successfully!');
    } catch (error) {
      setMessage('Error submitting report.');
    }
  };

  return (
    <div className="card p-4 mb-4" id="upload">
      <h2>Report Garbage</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Upload Image</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit Report</button>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}

export default UploadForm;
