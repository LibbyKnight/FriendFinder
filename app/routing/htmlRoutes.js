var express = require('express');

var bodyParser= require('body-parser');

var path= require("path");


//route handler

module.exports = function(app){

	app.get("/", function (req, res) {

		res.sendFile(path.join(__dirname, '/../public/home.html'));

});



app.post("/survey", function (req, res) {

	res.sendFile(path.join(__dirname, '/../public/survey.html'));

});