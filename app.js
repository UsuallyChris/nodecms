const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res) => {
  res.send(`Home Page`);
})

app.listen(3000, () => {
  console.log(`Server Running!`);
});