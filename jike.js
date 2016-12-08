$( document ).ready(function() {
  var thermostat = new Thermostat();

  temperatureChange();

  function temperatureChange(){
    $( "#energy-usage" ).attr("class", thermostat.currentUsage());
    $( "#energy-usage" ).text(thermostat.currentUsage());
  }

  $( ".temperature-display" ).text(thermostat.displayTemperature());

  $( "#up" ).click(function(){
    thermostat.up();
    temperatureChange();
    $( ".temperature-display" ).text(thermostat.displayTemperature());
  });

  $ ( "#down" ).click(function(){
    thermostat.down();
    temperatureChange();
    $( ".temperature-display" ).text(thermostat.displayTemperature());
  });

  $ ( "#reset" ).click(function(){
    thermostat.reset();
    temperatureChange();
    $( ".temperature-display" ).text(thermostat.displayTemperature());
  });

  $ ( "#power-saving" ).click(function(){
    thermostat.enablePowerSaving();
  });

  $ ( "#power-hungry" ).click(function(){
    thermostat.disablePowerSaving();
  });

});
