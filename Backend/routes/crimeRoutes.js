const express = require('express');
const Report = require('../models/Report');

const router = express.Router();

// Submit a new crime report
router.post('/report-crime', async (req, res) => {
  try {
    const newReport = await Report.create(req.body);
    res.status(201).send('Crime report submitted successfully!');
  } catch (error) {
    res.status(500).send('Error submitting report');
  }
});

// Get all crime reports
router.get('/get-crime-reports', async (req, res) => {
  try {
    const reports = await Report.findAll();
    res.json(reports);
  } catch (error) {
    res.status(500).send('Error fetching reports');
  }
});

// Mark a location as safe
router.post('/mark-safe', async (req, res) => {
  try {
    const { location } = req.body;
    await Report.update({ markedSafe: true }, { where: { location } });
    res.send('Location marked as safe');
  } catch (error) {
    res.status(500).send('Error marking location as safe');
  }
});

module.exports = router;