let express = require('express');
let app = express();
const path = require('path');
const bodyParse = require('body-parser');
<<<<<<< HEAD
=======
let zipFolder = require('zip-folder');
>>>>>>> 9454ce8f36512ae6ad331728d05fdbea5a19ca04
let zipper = require('./zipper');
let createFolder = require('./folderBuilder.js');
let remover = require('./remover.js');

app.use(bodyParse());
app.use(express.static('build'));

app.get("/", (req,res) => {
  //When using path.join, please DON'T add current directory "./[path]"
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/bundle.js'));
});

<<<<<<< HEAD
app.post('/download', createFolder, zipper, (req,res) => {
// app.get('/', createFolder, zipper, (req,res) => {
    res.download(path.join(__dirname, './templateStore/zippedFile.zip'));
=======
app.get('/download', zipper, (req,res) => {
  res.download(path.join(__dirname, './templateStore/zippedFile.zip'));
>>>>>>> 9454ce8f36512ae6ad331728d05fdbea5a19ca04
});


app.listen(3000, () => {
    console.log('now listening on 3000!');
}); 
