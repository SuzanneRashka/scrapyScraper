var express = require("express");
var exhbs = require("express-handlebars");
var cheerio = require("cheerio");
var request = require("request");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var mongojs = require("mongojs");
var morgan = require('morgan');

var port = process.env.PORT || 3000;

var $ = cheerio.load();


app.listen(3000, function () {
    console.log("Listening on port: " + port);
});