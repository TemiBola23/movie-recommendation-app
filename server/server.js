// server/server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL, // e.g. https://yourfrontend.vercel.app
  credentials: true
}));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB Error:', err));

// Routes
const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);

// Health check
app.gemt('/', (req, res) => {
  res.send('🎬 Movie Recommendation API running successfully.');
});
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is live at http://localhost:${PORT}`);
});
