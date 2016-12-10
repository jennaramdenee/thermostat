$( document ).ready(function() {
  var thermostat = new Thermostat();

  getSettings();
  energyUsageChange();

  $( ".temperature-display" ).text(thermostat.displayTemperature() + "C");

  $( "#up" ).click(function(){
    thermostat.up();
    energyUsageChange();
    postTemperature(thermostat.displayTemperature());
    $( ".temperature-display" ).text(thermostat.displayTemperature() + "C");
  });

  $ ( "#down" ).click(function(){
    thermostat.down();
    energyUsageChange();
    $( ".temperature-display" ).text(thermostat.displayTemperature() + "C");
  });

  $ ( "#reset" ).click(function(){
    thermostat.reset();
    energyUsageChange();
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
    postCity(city);
    loadWeather(city);
  })

  function energyUsageChange(){
    $( "#energy-usage" ).attr("class", thermostat.currentUsage());
    $( "#energy-usage" ).text(thermostat.currentUsage());
  }

  function loadWeather(city){
    var token = '&appid=3352b2eab6d1a3fe0a4196871876b36a';
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $("#current-temp").text(data.main.temp);
      $("#city-name").text(data.name);
    })
  }

  function getSettings(){
    $.getJSON('http://localhost:4567/settings', function(data) {
      $(".temperature-display").text(data.temperature);
      loadWeather(data.city);
      console.log(data);
    })
  }

  function postCity(city){
    $.post('http://localhost:4567/city', { "city":city })
  }

  function postTemperature(temperature){
    $.post('http://localhost:4567/temperature', { "temperature":temperature.toString() })
  }

});
