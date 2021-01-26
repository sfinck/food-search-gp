$(document).ready(function () {
  var city = document.getElementById('input_text').value;
  var searchButton = $('#search-button')
  searchButton.on('click', function(){
  
// api call for city
  var city = document.getElementById('input_text').value;
  var queryUrl = "https://developers.zomato.com/api/v2.1/cities?q=" + city + "&count=3";
  
  $.ajax({
    method: "GET",
    url: queryUrl,
    headers: {
      "user-key": "050c9a1147aff519042c287b16c3590d",
      "content-type": "application/json",
    },
    success: function (response) {
      console.log(response);
      console.log(response.location_suggestions[0].name)
      console.log(response.location_suggestions[1].name)
      console.log(response.location_suggestions[2].name)

      $('<button/>')
     

      for (i = 0; i < response.restaurants.length; i++) {
          // console.log(response.restaurants[i])
      }
    },
  });

    // api call for weather for city
    const apiKey = "&appid=3e560cf76997f959e63ea4f02f69aca9&units=imperial";
    var city = document.getElementById('input_text').value;
    var queryURL2 =
    "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
  $.ajax({
    method: "GET",
    url: queryURL2,
    success: function (response2) {
      // console.log(response2);
      // console.log(response2.main.temp)
      // console.log(response2.weather[0].description)
      $('#tempEl').text('Temperature: ' + response2.main.temp)
      $('#precEl').text('Precipitaion: ')
      $('#windEl').text('Wind: ' + response2.wind.speed)
      $('#cloudEl').text('Cloud Conditions: ' + response2.weather[0].description)
      
    },
  });
  






  
})

});

// create three buttons, grab names from api call, attatch event handlers for each button and when one is clicked it will do a api call for the city by the id