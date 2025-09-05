require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');   // <— add this

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all origins

// Health check
app.get('/api/health', (req, res) => {
  const dbStatus = db && db.threadId ? 'connected' : 'initialized';
  res.json({
    status: 'ok',
    db: dbStatus,
    time: new Date().toISOString()
  });
});

// Mount routes
app.use('/api/students', studentRoutes);   // now clearly under /api/students
app.use('/api/courses', courseRoutes);     // new endpoint for courses

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
