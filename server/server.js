let express = require('express');
let app = express();
const path = require('path');
const bodyParse = require('body-parser');
let zipFolder = require('zip-folder');
let zipper = require('./zipper');

app.use(bodyParse());
app.use(express.static('build'));

app.get("/", (req,res) => {
  //When using path.join, please DON'T add current directory "./[path]"
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/bundle.js'));
});

app.post('/download', (req,res) => {
  console.log('Get request received!');
  console.log(req.body);
  res.end();
});


app.listen(3000, () => {
    console.log('now listening on 3000!');
}); 