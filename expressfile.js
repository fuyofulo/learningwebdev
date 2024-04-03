const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.listen(3000);
app.use(express.json());

// Endpoint to get a list of files
app.get('/files', (req, res) => {
  fs.readdir('./files', (err, files) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(files);
    }
  });
});

// Endpoint to get the content of a file
app.get('/file/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = `./files/${filename}`;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('File not found');
    } else {
      res.status(200).send(data);
    }
  });
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).send('Route not found');
});