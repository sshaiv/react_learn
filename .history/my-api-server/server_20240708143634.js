const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle the POST request
app.post('/postform', (req, res) => {
  const { name, email } = req.body;
  console.log('Received data:', { name, email });
  res.status(201).send({ message: 'User saved successfully', data: { name, email } });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
