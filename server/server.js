const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 2000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
const uri = 'mongodb://0.0.0.0:27017/exercise_tracker';
mongoose.connect(uri, {
  useNewUrlParser: true,
  // useCreateIndex: true
})
const connection = mongoose.connection;
connection.once('open', 
  () => {
    console.log(`MongoDB database connection established successfully`); 
  }
);

const exercisesRouter = require('./routes/exercises.js');
const usersRouter = require('./routes/users.js');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, 
  () => {
    console.log(`Server is running on port: ${port}`); 
  }
);