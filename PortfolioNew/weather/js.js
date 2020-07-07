$(document).ready(function(){
    if (navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(function(position) {
            lon = position.coords.longitude
            lat = position.coords.latitude;
            var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon; 
            console.log(lat);
            console.log(lon);
            $.getJSON(url, function(data){

              $("#temp").html('<img src="' + data.weather[0].icon + '">' + data.main.temp + " degrees");
              $("#btn1").html("<p>" + data.name + ", " + data.sys.country + "</p>");
              $("#btn2").html("<p>" + data.weather[0].description + "</p>");
              $("#btn3").html("<p> Wind speed is: " + data.wind.speed + "</p>");
              
              
            });
        });
    } else {
        alert("Geolocation is not supported in your browser");
      }
      
      
});