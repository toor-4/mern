const express = require('express');
const dotenv = require('dotenv').config();

const connectDB = require('./config/db.js');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello World, from Node.js!' });
});

app.listen(port, () => {
  connectDB();
  //   console.log('server started at http://localhost:' + port);
  console.log(`server started at http://localhost:${port}`);
});
