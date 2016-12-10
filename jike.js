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
    postTemperature(thermostat.displayTemperature());
    $( ".temperature-display" ).text(thermostat.displayTemperature() + "C");
  });

  $ ( "#reset" ).click(function(){
    thermostat.reset();
    energyUsageChange();
    postTemperature(thermostat.displayTemperature());
    $( ".temperature-display" ).text(thermostat.displayTemperature() + "C");
  });

  $ ( "#power-saving" ).click(function(){
    thermostat.enablePowerSaving();
    $(this).addClass('On');
    $( "#power-hungry" ).removeClass('On');
    postMode("Power Saving");
  });

  $ ( "#power-hungry" ).click(function(){
    thermostat.disablePowerSaving();
    $(this).addClass('On');
    $( "#power-saving" ).removeClass('On');
    postMode("Power Hungry");
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
      thermostat.temperature = parseFloat(data.temperature);
      loadWeather(data.city);

      $("#city").children().each(function(){
        var value = $(this).attr('value');
        if (value === data.city){
          $(this).attr("selected", "true");
        }
      })

      $(".power-mode").removeClass('On');
      if (data.mode === "Power Hungry"){
        $("#power-hungry").addClass('On');
        thermostat.disablePowerSaving();
      } else {
        $("#power-saving").addClass('On');
        thermostat.enablePowerSaving();
      }
      energyUsageChange();
    })
  }

  function updateView(){
    $(this).addClass('On');
    $( "#power-saving" ).removeClass('On');


  }

  function postCity(city){
    $.post('http://localhost:4567/city', { "city":city })
  }

  function postTemperature(temperature){
    $.post('http://localhost:4567/temperature', { "temperature":temperature.toString() })
  }

  function postMode(mode){
    $.post('http://localhost:4567/mode', { "mode":mode })
  }

});
