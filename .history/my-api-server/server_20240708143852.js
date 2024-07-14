const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/postform', (req, res) => {
  const { name, email } = req.body;
  console.log('Received data:', { name, email });
  res.status(201).send({ message: 'User saved successfully', data: { name, email } });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
