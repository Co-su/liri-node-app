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
  	
  	} else if (command == "spotify-this-song"){
    
    //Spotify Song Search
    songName = process.argv[3];
    var Spotify = require("node-spotify-api");
    var spotify = new Spotify({
      id: "01f6dfc0bbd04591bbe5ffda7cc4c559",
      secret: "72aa7eae9afd45388ab474a9d10cb808",
    });
    spotify.search({
    	type: "track",
    	query: songName
    		}, function(err, data) {
      			if (err) {
        	return console.log("Error: " + err);
      	}
    	console.log("Artist(s): " +data.tracks.items[0].album.artists[0].name);
    	console.log("The song's name: " +data.tracks.items[0].name);
    	console.log("Song preview: " +data.tracks.items[0].preview_url);
    	console.log("Album: " +data.tracks.items[0].album.name); 
		});
	
	}else if (command == "tweetMe"){
	
	//Twitter Search
	var myTweets = process.argv[4];
	var queryUrl = "https://api.twitter.com/1.1/statuses/tweets/509457288717819904.json";
	request(queryUrl, function(error, response, body) {
  	if (!error && response.statusCode === 200) {
    console.log(JSON.parse(body).text);
  			}
		}
	)};
});

//Spotify Request


