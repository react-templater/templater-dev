const express = require('express');
const app = express();
const path = require('path');
const bodyParse = require('body-parser');
const zipper = require('./zipper');
const templateController = require('./templateController');
const moduleController = require('./moduleController.js');
const settingsController = require('./settingsController');

app.use(bodyParse());
app.use(express.static('build'));

app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/bundle.js'));
});

app.get('/download', (req, res) => {
  res.download(path.join(__dirname, './templateStore/zippedFile.zip'));
});

app.post('/',
  templateController,
  moduleController.assets,
  moduleController.components,
  moduleController.style,
  settingsController.packageParser,
  settingsController.webpackParser,
  zipper,
  (req, res) => {
    res.send('this is the response')
  }
);

app.use('/assets', express.static('build'));

app.listen(3000, () => {
  console.log('now listening on 3000!');
});

