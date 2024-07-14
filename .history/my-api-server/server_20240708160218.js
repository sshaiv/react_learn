const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); // Use CORS middleware

// Connect to MongoDB with adjusted settings
m

// Route to handle POST request
app.post('/postform', async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      res.status(400).send({ message: 'Name and email are required' });
    } else {
      console.log('Received data:', { name, email });

      // Save new user to the database
      const user = new User({ name, email });
      await user.save();

      res.status(201).send({ message: 'User saved successfully', data: { name, email } });
    }
  } catch (error) {
    console.error('Error handling POST request:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
});

app.listen(port, (error) => {
  if (error) {
    return console.error('Error starting the server:', error);
  }
  console.log(`Server running at http://localhost:${port}/`);
});
