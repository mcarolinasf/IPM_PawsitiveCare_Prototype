
const express = require('express');
const app = express();
const mongooseConnection = require('./config/connection'); // Import Mongoose connection

var cors = require('cors');
app.use(cors());

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


