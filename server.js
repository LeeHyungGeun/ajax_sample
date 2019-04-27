const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// CORS - Disable Same Origin Policy
app.use(cors());
app.use(bodyParser.json());

app.get('/getData', function(req, res) {
  res.json({
    name: 'EDWIDTH'
  });
});

app.post('/addData', function(req, res) {
  console.log(req.body)
  res.json(req.body);
});

app.listen(8080);