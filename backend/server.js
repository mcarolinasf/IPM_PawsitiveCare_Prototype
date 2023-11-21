
const express = require('express');
const app = express();
const mongooseConnection = require('./config/connection'); // Import Mongoose connection

const User = require('./models/user'); // Import your Mongoose model

app.use(express.json());

const PORT = process.env.PORT || 8080;

// Start the server once the MongoDB connection is established
mongooseConnection.once('open', () => {
  const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});

// Use your routes after the server starts
const userRoutes = require('./routes/user');
app.use('/api', userRoutes);


