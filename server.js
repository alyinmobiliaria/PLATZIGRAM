var express = require("express");
var app = express();
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});
app.listen(3000, function(err){
	if(err) return console.log("Hubo un error"), process.exit(1);
	console.log("Platzigram escuchando en el puerto 3000");
})