$( document ).ready(function() {
  var thermostat = new Thermostat();
  $( ".temperature-display" ).text(thermostat.displayTemperature());

});
