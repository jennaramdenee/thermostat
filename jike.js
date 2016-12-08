$( document ).ready(function() {
  var thermostat = new Thermostat();
  $( ".temperature-display" ).text(thermostat.displayTemperature());

  $( "#up" ).click(function(){
    thermostat.up();
    $( ".temperature-display" ).text(thermostat.displayTemperature());
  });

  $ ( "#down" ).click(function(){
    thermostat.down();
    $( ".temperature-display" ).text(thermostat.displayTemperature());
  });
  
});
