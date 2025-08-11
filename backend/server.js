const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');

const connectDB = require('./config/db.js');

const app = express();
const port = process.env.PORT || 5000;

const workoutRoutes = require('./routes/workoutRoutes.js');

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json()); // allows us to accept JSON data in the req.body

app.use('/api/workouts', workoutRoutes);

app.listen(port, () => {
  connectDB();
  //   console.log('server started at http://localhost:' + port);
  console.log(`server started at http://localhost:${port}`);
});
