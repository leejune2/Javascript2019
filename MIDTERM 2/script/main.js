// variable for a map, that we're going to attach a map to on line 10
var map;

//location of the center of the map, on initialization
var myLatLng = {lat: 41.850033, lng: -97.6500523};

//function to initialize map
  function initMap() {

    //geocoder - built-in object from map api
      var geocoder = new google.maps.Geocoder;
	    var monuments = 
      [{
        title: "Grand Staircase Escalante National Monument",
        searchTerm: "Grand Staircase Escalante National Monument"
      },
      { title: "Basin and Range, Nevada",
        searchTerm: "basin range"
      }, 
      { title: "Carrizo Plain, California",
        searchTerm: "carrizo plain california"
      },
      { title: "Katahdin Woods and Waters, Maine",
        searchTerm: "Katahdin"
      },
      { title: "Marianas Trench, Northern Mariana Islands",
        searchTerm: "marianas"
      },
      { title: "Mojave Trails, California",
        searchTerm: "mojave california"
      },
      { title: "Organ Mountains-Desert Peaks, New Mexico",
        searchTerm: "organ mountains"
      },
      { title: "San Gabriel Mountains, California",
        searchTerm: "San Gabriel california"
      },
      { title: "Vermilion Cliffs, Arizona",
        searchTerm: "Vermilion Cliffs"
      }];

    //getting the map div and inserting a map in it
		  map = new google.maps.Map(document.getElementById('map'), {
	      zoom: 4,
	      center: myLatLng
	  });
 
    monuments.forEach(function(m){
      console.log(m["title"], m["address"]);

    //geocoder method to retrieve lat+long of specific location
    geocoder.geocode( {address:m["title"]}, function(results, status){

      //variable for lat, the first result from geocode, required by api
      var lat = results[0].geometry.location.lat();

      //variable for long, the first result from geocode, required by api
      var long = results[0].geometry.location.lng();

      //Marker is a built in class and we use an instance of the Marker class called marker to include a marker on map with lat/long locations
      var marker = new google.maps.Marker({
          position: {lat: lat, lng: long},
          map: map,
          title: m["title"]
         }); 

      //add an event listener to the object marker
       marker.addListener('click', function() {

      //when the object is clicked, we build the query to send the api
        var imgurl = "https://pixabay.com/api/?key=11756178-018e6a4e6ee5bcae5027c0d56&page=1&q=" + m["searchTerm"];

      //send the api request 
         fetch(imgurl)
        .then(function(response){

      //bringing the response as json
          return response.json();
        })
        .then(function(resp){

      //begin to parse the json response
          var image = resp["hits"];
      
      //take the largeImageURL and tags, and place them in the div responseImagesHere
          document.getElementById("responseImagesHere").innerHTML = "<img src="+image[0]["largeImageURL"]+">" + image[0]["tags"];
        });
      });

    });

    });



}


