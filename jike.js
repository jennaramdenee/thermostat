$( document ).ready(function() {
  var thermostat = new Thermostat();

  temperatureChange();
  loadWeather("london");

  function temperatureChange(){
    $( "#energy-usage" ).attr("class", thermostat.currentUsage());
    $( "#energy-usage" ).text(thermostat.currentUsage());
  }

  $( ".temperature-display" ).text(thermostat.displayTemperature() + "C");

  $( "#up" ).click(function(){
    thermostat.up();
    temperatureChange();
    $( ".temperature-display" ).text(thermostat.displayTemperature() + "C");
  });

  $ ( "#down" ).click(function(){
    thermostat.down();
    temperatureChange();
    $( ".temperature-display" ).text(thermostat.displayTemperature() + "C");
  });

  $ ( "#reset" ).click(function(){
    thermostat.reset();
    temperatureChange();
    $( ".temperature-display" ).text(thermostat.displayTemperature() + "C");
  });

  $ ( "#power-saving" ).click(function(){
    thermostat.enablePowerSaving();
  });

  $ ( "#power-hungry" ).click(function(){
    thermostat.disablePowerSaving();
  });

  $ ( "#city" ).change(function(event){
    event.preventDefault();
    var city = $("#city").val();
    loadWeather(city);
  })

  function loadWeather(city){
    var token = '&appid=3352b2eab6d1a3fe0a4196871876b36a';
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $("#current-temp").text(data.main.temp);
    })
  }

});
