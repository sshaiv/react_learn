const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); // Use CORS middleware

// Sample dataset
const users = [
  { name: 'John Doe', email: 'john.doe@example.com' },
  { name: 'Jane Smith', email: 'jane.smith@example.com' }
];

// Route to get the sample data
app.get('/users', (req, res) => {
  res.status(200).send(users);
});

// Route to get the count of users
app.get('/users/count', (req, res) => {
  res.status(200).send({ count: users.length });
});

// Route to handle POST request
app.post('/postform', (req, res) => {
  try {
    const { name, email } = req.body
