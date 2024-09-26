const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const crimeRoutes = require('./routes/crimeRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', crimeRoutes);

// Sync models with the database and start the server
sequelize.sync()
  .then(() => {
    console.log('Database & tables synced successfully');
    app.listen(PORT, () => {
      console.log(Server running on port ${PORT});
    });
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });