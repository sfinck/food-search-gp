$(document).ready(function () {
// api call for restaurants by city, state
  var queryUrl = "https://developers.zomato.com/api/v2.1/search?entity_type=city&q=kansas%20city%2C%20missouri";
  // var city = $('')
  $.ajax({
    method: "GET",
    url: queryUrl,
    headers: {
      "user-key": "050c9a1147aff519042c287b16c3590d",
      "content-type": "application/json",
    },
    success: function (response) {
      console.log(response);
      console.log(response.restaurants[4].restaurant.name);
      console.log(response.restaurants[4].restaurant.menu_url);
      console.log(response.restaurants[4].restaurant.user_rating.aggregate_rating);
      // console.log(response.restaurants)

      for (i = 0; i < response.restaurants.length; i++) {
          // console.log(response.restaurants[i])
      }
    },
  });

    // api call for weather for city
    const apiKey = "&appid=3e560cf76997f959e63ea4f02f69aca9&units=imperial";
    // var city2 = document.getElementById('input html element here').value;
    var queryURL2 =
    "https://api.openweathermap.org/data/2.5/weather?q=kansas city" + apiKey;
  $.ajax({
    method: "GET",
    url: queryURL2,
    success: function (response2) {
      console.log(response2);
      console.log(response2.main.temp)
      console.log(response2.weather[0].description)
    },
  });
});
