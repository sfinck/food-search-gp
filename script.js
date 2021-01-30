$(document).ready(function () {
  var city = document.getElementById('input_text').value;
  var searchButton = $('#search-button')

  searchButton.on('click', function () {

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
        var btnText1 = response.location_suggestions[0].name
        var btnText2 = response.location_suggestions[1].name
        var btnText3 = response.location_suggestions[2].name

        document.getElementById('button1').innerHTML = btnText1;
        document.getElementById('button2').innerHTML = btnText2;
        document.getElementById('button3').innerHTML = btnText3;

        var btn1 = document.getElementById('button1')
        var btn2 = document.getElementById('button2')
        var btn3 = document.getElementById('button3')

        $('#button1').removeClass('hidden')
        $('#button2').removeClass('hidden')
        $('#button3').removeClass('hidden')

        btn1.addEventListener('click', function () {

          var id1 = response.location_suggestions[0].id
          var queryURL3 = 'https://developers.zomato.com/api/v2.1/search?entity_id=' + id1 + '&entity_type=city&count=3';
          $.ajax({
            method: 'GET',
            url: queryURL3,
            headers: {
              "user-key": "050c9a1147aff519042c287b16c3590d",
              "content-type": "application/json",
            },
            success: function (response3) {
              console.log(response3);
              var resultName1 = response3.restaurants[0].restaurant.name
              var resultAddress1 = response3.restaurants[0].restaurant.location.address
              var resultRating1 = response3.restaurants[0].restaurant.user_rating.aggregate_rating

              var resultName2 = response3.restaurants[1].restaurant.name
              var resultAddress2 = response3.restaurants[1].restaurant.location.address
              var resultRating2 = response3.restaurants[1].restaurant.user_rating.aggregate_rating

              var resultName3 = response3.restaurants[2].restaurant.name
              var resultAddress3 = response3.restaurants[2].restaurant.location.address
              var resultRating3 = response3.restaurants[2].restaurant.user_rating.aggregate_rating



              $('#res-1').removeClass('hidden')
              $('#result1').text(resultName1);
              $('#rating1').text('Review: ' + resultRating1 + ' out of 5');
              $('#address1').text('Address: ' + resultAddress1);

              $('#res-2').removeClass('hidden')
              $('#result2').text(resultName2);
              $('#rating2').text('Review: ' + resultRating2 + ' out of 5');
              $('#address2').text('Address: ' + resultAddress2);

              $('#res-3').removeClass('hidden')
              $('#result3').text(resultName3);
              $('#rating3').text('Review: ' + resultRating3 + ' out of 5');
              $('#address3').text('Address: ' + resultAddress3);

              $('#button1').addClass('hidden')
              $('#button2').addClass('hidden')
              $('#button3').addClass('hidden')


            }
          })

        })

        btn2.addEventListener('click', function () {

          var id2 = response.location_suggestions[1].id
          var queryURL3 = 'https://developers.zomato.com/api/v2.1/search?entity_id=' + id2 + '&entity_type=city&count=3';
          $.ajax({
            method: 'GET',
            url: queryURL3,
            headers: {
              "user-key": "050c9a1147aff519042c287b16c3590d",
              "content-type": "application/json",
            },
            success: function (response3) {
              console.log(response3);

              var resultName1 = response3.restaurants[0].restaurant.name
              var resultAddress1 = response3.restaurants[0].restaurant.location.address
              var resultRating1 = response3.restaurants[0].restaurant.user_rating.aggregate_rating

              var resultName2 = response3.restaurants[1].restaurant.name
              var resultAddress2 = response3.restaurants[1].restaurant.location.address
              var resultRating2 = response3.restaurants[1].restaurant.user_rating.aggregate_rating

              var resultName3 = response3.restaurants[2].restaurant.name
              var resultAddress3 = response3.restaurants[2].restaurant.location.address
              var resultRating3 = response3.restaurants[2].restaurant.user_rating.aggregate_rating



              $('#res-1').removeClass('hidden')
              $('#result1').text(resultName1);
              $('#rating1').text('Review: ' + resultRating1 + ' out of 5');
              $('#address1').text('Address: ' + resultAddress1);

              $('#res-2').removeClass('hidden')
              $('#result2').text(resultName2);
              $('#rating2').text('Review: ' + resultRating2 + ' out of 5');
              $('#address2').text('Address: ' + resultAddress2);

              $('#res-3').removeClass('hidden')
              $('#result3').text(resultName3);
              $('#rating3').text('Review: ' + resultRating3 + ' out of 5');
              $('#address3').text('Address: ' + resultAddress3);

              $('#button1').addClass('hidden')
              $('#button2').addClass('hidden')
              $('#button3').addClass('hidden')


            }
          })

        })

        btn3.addEventListener('click', function () {

          var id3 = response.location_suggestions[2].id
          var queryURL3 = 'https://developers.zomato.com/api/v2.1/search?entity_id=' + id3 + '&entity_type=city&count=3';
          $.ajax({
            method: 'GET',
            url: queryURL3,
            headers: {
              "user-key": "050c9a1147aff519042c287b16c3590d",
              "content-type": "application/json",
            },
            success: function (response3) {
              console.log(response3);

              var resultName1 = response3.restaurants[0].restaurant.name
              var resultAddress1 = response3.restaurants[0].restaurant.location.address
              var resultRating1 = response3.restaurants[0].restaurant.user_rating.aggregate_rating

              var resultName2 = response3.restaurants[1].restaurant.name
              var resultAddress2 = response3.restaurants[1].restaurant.location.address
              var resultRating2 = response3.restaurants[1].restaurant.user_rating.aggregate_rating

              var resultName3 = response3.restaurants[2].restaurant.name
              var resultAddress3 = response3.restaurants[2].restaurant.location.address
              var resultRating3 = response3.restaurants[2].restaurant.user_rating.aggregate_rating



              $('#res-1').removeClass('hidden')
              $('#result1').text(resultName1);
              $('#rating1').text('Review: ' + resultRating1 + ' out of 5');
              $('#address1').text('Address: ' + resultAddress1);

              $('#res-2').removeClass('hidden')
              $('#result2').text(resultName2);
              $('#rating2').text('Review: ' + resultRating2 + ' out of 5');
              $('#address2').text('Address: ' + resultAddress2);

              $('#res-3').removeClass('hidden')
              $('#result3').text(resultName3);
              $('#rating3').text('Review: ' + resultRating3 + ' out of 5');
              $('#address3').text('Address: ' + resultAddress3);

              $('#button1').addClass('hidden')
              $('#button2').addClass('hidden')
              $('#button3').addClass('hidden')



            }
          })

        })

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
        console.log(response2);
        // console.log(response2.main.temp)
        // console.log(response2.weather[0].description)
        $('#tempEl').text('Temperature: ' + response2.main.temp)
        $('#feelsLikeEl').text('Feels Like: ' + response2.main.feels_like)
        $('#windEl').text('Wind: ' + response2.wind.speed)
        $('#cloudEl').text('Cloud Conditions: ' + response2.weather[0].description)



      },
    });









  })

});


