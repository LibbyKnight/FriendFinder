var express = require('express');
var bodyParser= require('body-parser');
var path= require('path');
var PORT = 3000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);



var Data = [];



app.get('/api/currentData', function(req, res) {
   var curData = [];
   if (Data.length == 4) {
       res.json(Data);
   } else {
       for (var i = 0; i < Data.length; i++) {
           curData.push(Data[i])
       }

       res.json(curData);
   }

});

app.get('/api/tables', function(req, res) {
   res.json(Data);
});

app.post('/api/new', function(req, res) {
   var userData = req.body;
   Data.push(userData);

   console.log(userData);

   console.log(Data);

   res.json(Data);
})



app.listen(PORT, function() {
  console.log("App listening.");
});

