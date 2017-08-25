let express = require('express');
let app = express();
const path = require('path');
const bodyParse = require('body-parser');

app.use(bodyParse.json());

app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/bundle.js'));
});

// app.get('/download', () => {
  //res.downloadFile(path.join(__dirname, './../store/template/index.html'))
  // });
  
app.use('/', express.static('../build'));
// app.use('/build', express.static('../build/assets'));

app.listen(3000, () => {
    console.log('now listening on 3000!');
}); 