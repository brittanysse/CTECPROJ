var express = require("express"); //using the express web framework
const port = 3000;
var movieController = require('./controllers/movieController');
var commentController = require('./controllers/commentController');

var app = express(); // set variable app to be an instance of express framework. From now on, app is the express

app.use(express.static("./public")); //static files are to be served from the public folder - for eg. html, images, css
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.
// In time to come we will need to accept new or edited comments from user

app.route('/movies').get(movieController.getAllMovies);
app.route('/comments').get(commentController.getAllComments)
app.route('/comments').post(commentController.addComment);
app.route('/comments/:id').put(commentController.updateComment)
app.route('/comments/:id').delete(commentController.deleteComment)


app.listen(8080, "127.0.0.1"); // start the nodejs to be listening for incoming request @ port 8080
//console.log("web server running @ http://127.0.0.1:8080"); // output to console 
