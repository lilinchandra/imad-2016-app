var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/Pandora.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Pandora.png'));
});

app.get('/ui/brain.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'brain.html'));
});

app.get('/ui/movies.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'movies.html'));
})
app.get('/ui/books.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'books.html'));
})
app.get('/ui/incidents.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'incidents.html'));
})
//app.get('/ui/bb1.png', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'bb1.png'));
//});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
