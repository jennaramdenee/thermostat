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

  $ ( "#reset" ).click(function(){
    thermostat.reset();
    $( ".temperature-display" ).text(thermostat.displayTemperature());
  });

  $ ( "#power-saving" ).click(function(){
    thermostat.enablePowerSaving();
  });

  $ ( "#power-hungry" ).click(function(){
    thermostat.disablePowerSaving();
  });

  $( ".energy-usage" ).attr("usage", function() {
    thermostat.currentUsage();
    })

    if (this.usage = "high-usage") {
      $ ( ".energy-usage" ).css('background-color', 'red');
    } else {
      $ ( ".energy-usage" ).css('background-color', 'green');
    }



});
