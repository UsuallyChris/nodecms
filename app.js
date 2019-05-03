const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

// Mongoose
mongoose.connect('mongodb://localhost:27017/cms', { useNewUrlParser: true} ) // connect to local mongodb database cms 
  .then( response => { // promise
    console.log(`MongoDB connected`);
  }).catch( err => { // catch error
    console.log(`MongoDB connect error`)
  });


// Middleware
app.use(express.json()); // replaces bodyParser
app.use(express.urlencoded({ extended: true })); // replaces bodyParser
app.use(express.static(path.join(__dirname, 'public'))); // grab static files from __dirname/public/

app.use('/', (req, res) => {
  res.send(`Home Page`);
})

app.listen(3000, () => {
  console.log(`Server Running!`);
});