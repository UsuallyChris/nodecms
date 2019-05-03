const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Mongoose
mongoose.connect('mongodb://localhost:27017/cms', { useNewUrlParser: true} )
  .then( response => {
    console.log(`MongoDB connected`);
  }).catch( err => {
    console.log(`MongoDB connect error`)
  });


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res) => {
  res.send(`Home Page`);
})

app.listen(3000, () => {
  console.log(`Server Running!`);
});