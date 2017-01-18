var express = require('express');

var bodyParser= require('body-parser');

var app = express();

app.use(bodyParser.json())

var PORT = 3000;



//route handler
app.get("/", function (req, res) {

	res.send(home.html);

})



app.post("/survey", function (req, res) {

	res.send(survey.html);

})

app.listen(PORT, function() {

	console.log("App listening");
});
