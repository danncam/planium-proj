
/**
 * First run "npm install express"
 * Then "node .\app.js"
 * And then, open browser at URL="http://localhost:8000/"
 */
const express = require("express");
const loader = require("./backend/loader");
const app = express();
app.use(express.static("public"));

var test = require('./backend/loader')

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.post('/submit', loader.process(req, res));

const hostname = 'localhost';
const port = 8000;

app.listen(port, hostname, function() {
    console.log(`Server is running on http://${hostname}:${port}`);
});
