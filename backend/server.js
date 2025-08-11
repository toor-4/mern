const express = require('express');

const app = express();
const port = process.env.port || 5000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello World, from Node.js!' });
});

app.listen(port, () => {
  //   console.log('server started at http://localhost:' + port);
  console.log(`server started at http://localhost:${port}`);
});
