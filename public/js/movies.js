//This function is to call the movies api and get all the movies
//that is showing in Shaw Theatres for Showing Now and Coming Soon
//whenever you call a pattern(server.js), at least have request.onload, request.opn, request.send
function getMovieData() {
	var request = new XMLHttpRequest();
	request.open('GET', movie_url, true); //line that calls the pattern, postman link pattern when url is called 
	//movie_url is from app.js
	//This function will be called when data returns from the web api    
	request.onload = function () {
		//what you need to handle when the data is coming inv 
		//when the method is called and data is retrieved, the follwing are done:      
		//get all the movies records into our movie array        
		movie_array = JSON.parse(request.responseText);
		//convert JSON format to array
		//this line is standard to retrieve data when data is sent    
		//Fetch the comments as well        
		fetchComments();
		displayMovies(category);
	};
	//This command starts the calling of the movies web api    
	request.send();
}

function displayMovies(category) {
	var table = document.getElementById("moviesTable");
	var movieCount = 0;
	var message = "";

	table.innerHTML = ""; //this is the table inserted in the index.html //blank for initialising
	totalMovies = movie_array.length;
	for (var count = 0; count < totalMovies; count++) {
		if (movie_array[count].availability == category) { //availability is now showing or coming soon
			var thumbnail = movie_array[count].thumb; //thumb is thumbnail //assign path
			var title = movie_array[count].title;
			var cell = '<div class="card col-md-3" ><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' + count + '" onClick="showMovieComments(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#movieModal" class="card-title" item="' + count + '" onClick="showMovieDetails(this)">' + title + '</h5></div>\
						</div>' //code for individual cell
			table.insertAdjacentHTML('beforeend', cell);
			movieCount++;
		}
	}
	 message = movieCount + " Movies " + category;
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
}
//This function is to display the "Now Showing" movies
function listNowShowingMovies() {
    category = "Now Showing";
    displayMovies(category);
    document.getElementById("nowMenu").classList.add("active");
    document.getElementById("comingMenu").classList.remove("active");
    document.getElementById("aboutMenu").classList.remove("active");
}

//This function is to display the "Coming Soon" movies
function listComingMovies() {
    category = "Coming Soon";
    displayMovies(category);
    document.getElementById("nowMenu").classList.remove("active");
    document.getElementById("comingMenu").classList.add("active");
    document.getElementById("aboutMenu").classList.remove("active");
}
//This function is to display the individual movies details
//whenever the user clicks on "See More"
function showMovieDetails(element) {
    var item = element.getAttribute("item");	
    currentIndex = item;
    document.getElementById("movieTitle").textContent = movie_array[item].title;
    document.getElementById("moviePoster").src = movie_array[item].poster;
    document.getElementById("genre").textContent = movie_array[item].genre;
    document.getElementById("director").textContent = movie_array[item].director;
    document.getElementById("cast").textContent = movie_array[item].cast;
    document.getElementById("release").textContent = movie_array[item].release;
    document.getElementById("advice").textContent = movie_array[item].advice;
    document.getElementById("story").textContent = movie_array[item].story;
    document.getElementById("trailer1").src = movie_array[item].video1;
    document.getElementById("trailer2").src = movie_array[item].video2;
}

//This function opens a new window/tab and loads the
//particular movie in the cinema website
function buyTicket() {
    window.open(movie_array[currentIndex].buy, "_blank");
}
