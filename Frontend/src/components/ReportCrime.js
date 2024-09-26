import React, { useState } from 'react';
import axios from 'axios';

const ReportCrime = () => {
  const [report, setReport] = useState({
    name: '',
    location: '',
    crimeType: '',
    description: '',
  });

  const handleChange = (e) => {
    setReport({ ...report, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/report-crime', report);
      alert('Crime reported successfully!');
    } catch (error) {
      console.error('Error reporting crime:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={report.name} onChange={handleChange} required />

      <label>Location:</label>
      <input type="text" name="location" value={report.location} onChange={handleChange} required />

      <label>Crime Type:</label>
      <input type="text" name="crimeType" value={report.crimeType} onChange={handleChange} required />

      <label>Description:</label>
      <textarea name="description" value={report.description} onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ReportCrime;