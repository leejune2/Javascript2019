
// First, grab the entire form's DOM object,
// and give it instructions to listen for a submit event (clicking submit or pressing enter).
// It also tells it what to DO when a submit happens - 
// in this case, run the getImages function, which
// we'll define next.
var form = document.getElementById("searchForm");
form.addEventListener("submit", getImages);

function getImages(e) {
  e.preventDefault();    // We want to write our own submit behavior, so we override the default behavior.
  
  var xhttp = new XMLHttpRequest();
  //saying we've made a container for a new XMLHttpRequest, get an envelope out
  
  var searchTerm = document.getElementById("searchBox").value;
  //new variable for value of searchBox
  var url = "https://pixabay.com/api/?key=11756178-018e6a4e6ee5bcae5027c0d56&page=1&q="+searchTerm;
  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //readyState means at what state of this httprequest are we at right now
      //if the state is done, and the status of the request to the api is OK
      var imageArray = JSON.parse(this.responseText)["hits"];
      //take the json file, parse it as a string, only include hits, contain it in the variable imageArray
      document.getElementById("responseImagesHere").innerHTML = "<img src="+imageArray[0]["previewURL"]+">";
      //replace content between the div tags of div with id responseimageshere with the img url 
    }
  };
  
  //responseText is a built in method of the XMLhttpRequest object that only returns strings
  //when the state of the page is ready, run this function - it's ready when the page is done enough to have some free processing power - making asynchronous 
  //onreadystatechange allows us to insert this function when the browser is ready enough 
  
  xhttp.open("GET", url, true);
  //open the envelope and write instructions for the api
  xhttp.send();
  //sending the envelope/request
}