const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); // Use CORS middleware

// Connect to MongoDB with adjusted settings
mongoose.connect('mongodb+srv://shaivshraddha:e3ftRVtKQtAj2MsN@mearnlearncluster.ibhmm4x.mongodb.net/students-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false,
  bufferTimeoutMS: 0,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define a User model
const User = mongoose.model('Form', new mongoose.Schema({
  name: String,
  email: String
}));

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