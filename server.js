const express = require('express');
const path = require('path');
require('dotenv').config();

// initialize DB connection (file created later)
const db = require('./database/connection');

const userRoutes = require('./routes/userRoutes');
const badgeRoutes = require('./routes/badgeRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api/users', userRoutes);
app.use('/api/badges', badgeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
