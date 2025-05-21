// server.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import routes
const tournamentsRouter = require('./routes/tournamentsRouter');
const teamsRouter = require('./routes/teamsRouter');
const poolsRouter = require('./routes/poolsRouter');
const bracketsRouter = require('./routes/bracketsRouter');

const app = express();
const port = process.env.PORT || 3001;
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/selectTourney';

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/tournaments', tournamentsRouter);
app.use('/api/tournaments/:id/teams', teamsRouter);
app.use('/api/tournaments/:id/pools', poolsRouter);
app.use('/api/tournaments/:id/bracket', bracketsRouter);

// MongoDB connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}/`);
});
