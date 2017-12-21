//*DISCLAIMER* I don't know how to assign individual command line calls to these individual modules.  
//Hoping to get some time with a TA to clarify.

//OMDB Request
var request = require("request");
var movieName = process.argv[2];
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&tomatoes=true&plot=short&apikey=trilogy";
request(queryUrl, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("RottenTomatoes: " + JSON.parse(body).tomatoMeter);
    console.log("Produced in: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Cast: " + JSON.parse(body).Actors);
  }
});
//Twitter Request
var request = require("request");
var myTweets = process.argv[3];
var queryUrl = "https://api.twitter.com/1.1/statuses/retweets/509457288717819904.json";
request(queryUrl, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    console.log(JSON.parse(body).text);
  }
});