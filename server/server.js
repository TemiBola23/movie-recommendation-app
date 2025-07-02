const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const movieRoutes = require('./routes/movieRoutes'); // ✅ Add this

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Register movie route
app.use('/api/movies', movieRoutes);

app.get('/', (req, res) => {
  res.send('🎬 Backend is working');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
