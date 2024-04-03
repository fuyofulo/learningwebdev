//learning express

const express = require('express');
const app = express();
app.listen(3000);
app.use(express.json());

app.get('/', (req,res) => {
  res.json("Hello World");
});

app.get('/name', (req,res) => {
  const name = req.body.name;
  const message = "Hello "+name;
  res.json(message);
});

app.post('/', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = "Received name: " + name + ", Received email: " + email;
  res.json({message});
});
