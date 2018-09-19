var express = require("express");
var exhbs = require("express-handlebars");
var cheerio = require("cheerio");
var request = require("request");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var mongojs = require("mongojs");


var $ = cheerio.load();
let jsonframe = require('jsonframe-cheerio');
jsonframe($) // initializing the plugin
var app = express();

// Database config
var databaseUrl = "scraper";
var collections = ["scrapedData"];

//hook mongojs config to db 
var db = mongojs(databaseUrl, collections);
db.on("error", function (error) {
    console.log("Database Error: ", error);
});

//main route
app.get("/", function (req, res) {
    res.send("Hello me");
});

app.get("/scrape", function (req, res) {
    request("https://www.nytimes.com/", function (error, response, html) {

        var $ = cheerio.load(html);


        $("h2.story-heading").each(function (i, element) {

            var result = {};

            // Add the text and href of every link, and save them as properties of the result object
            result.title = $(this).children("a").text();
            result.link = $(this).children("a").attr("href");

            if (result.title !== "" && result.link !== "") {
                articlesArr.push(result);
            }
        });
        callback(articlesArr);
    });
})




app.listen(3000, function () {
    console.log("Listening on port 3000")
});