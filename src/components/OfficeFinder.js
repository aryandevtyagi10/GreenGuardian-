import React, { useState } from 'react';
import axios from 'axios';
import '../styles/OfficeFinder.css';

function OfficeFinder() {
  const [locality, setLocality] = useState('');
  const [office, setOffice] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/offices/${locality}`);
      setOffice(response.data);
      setError('');
    } catch (err) {
      setError('No office found for this locality.');
      setOffice(null);
    }
  };

  return (
    <div className="card p-4" id="office-finder">
      <h2>Find Municipal Office</h2>
      <div className="form-group">
        <label>Enter Locality</label>
        <input
          type="text"
          className="form-control"
          value={locality}
          onChange={(e) => setLocality(e.target.value)}
          placeholder="e.g., Downtown"
        />
      </div>
      <button className="btn btn-primary" onClick={handleSearch}>Search</button>
      {office && (
        <div className="mt-3">
          <h4>{office.locality}</h4>
          <p>Contact: {office.contactNumber}</p>
          <p>Email: {office.email}</p>
        </div>
      )}
      {error && <p className="text-danger mt-2">{error}</p>}
    </div>
  );
}

export default OfficeFinder;
