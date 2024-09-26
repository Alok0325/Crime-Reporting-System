import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/get-crime-reports');
        setReports(response.data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };
    fetchReports();
  }, []);

  const markAsSafe = async (location) => {
    try {
      await axios.post('http://localhost:5000/api/mark-safe', { location });
      alert('Area marked as safe.');
    } catch (error) {
      console.error('Error marking area as safe:', error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>
            <strong>{report.crimeType}</strong> at {report.location}
            <button onClick={() => markAsSafe(report.location)}>Mark as Safe</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;