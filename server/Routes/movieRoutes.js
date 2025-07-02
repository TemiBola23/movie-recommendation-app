// server/routes/movieRoutes.js
const express = require('express');
const router = express.Router();

// Basic working test route
router.get('/', (req, res) => {
  res.json({ message: '✅ /api/movies route is working' });
});

module.exports = router;
