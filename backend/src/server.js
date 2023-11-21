
const express = require('express');

const serverless = require('serverless-http')

const app = express();
const mongooseConnection = require('./config/connection'); 


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
app.use('/.netlify/functions/api', userRoutes);


module.exports.handler = serverless(app);


