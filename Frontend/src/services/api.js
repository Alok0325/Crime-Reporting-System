import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Submit a new crime report
export const submitCrimeReport = (report) => {
  return axios.post(${API_URL}/report-crime, report);
};

// Get all crime reports
export const getCrimeReports = () => {
  return axios.get(${API_URL}/get-crime-reports);
};

// Mark a location as safe
export const markLocationSafe = (location) => {
  return axios.post(${API_URL}/mark-safe, { location });
};