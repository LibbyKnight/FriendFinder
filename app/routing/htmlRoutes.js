var express = require('express');

var bodyParser= require('body-parser');

var app = express();

app.use(bodyParser.json())

var PORT = 3000;

var array = ["beatriz", 34, "ponce"];

//route handler
app.get("/survery", function (req, res) {

res.send('bea');

})



app.post("/insert", function (req, res) {

array.push(req.body) 

res.send('success');

})


app.listen(PORT, function() {

	console.log("App listening");
});
