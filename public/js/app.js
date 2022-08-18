// client-side js
var movie_url = "/movies"; //use slash moviues to retrieve info from DB then convert and store to array
var movie_array = []; // This creates an empty movie array which displays the list
var movieCount = 0; //how many movies r there in the DB
/*  There are two categories: "Now Showing" and "Coming Soon". This variable states which 
    category of movies should be listed when the home page is first loaded. */
var category = "Now Showing";
var currentIndex = 0;
var comment_url = "/comments";
var comment_array = []; // This creates an empty comment array
var popcornBWImage = 'images/popcorn_bw.png';
var popcornImage = 'images/popcorn.png';
var rating = 0;
