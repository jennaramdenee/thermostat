var Thermostat = function() {
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;

  this.MAX_TEMP_POWER_SAVING = 25;
  this.maxTemperature = this.MAX_TEMP_POWER_SAVING;

  this.MAX_TEMP_POWER_HUNGRY = 32;
  this.MIN_TEMP = 10;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;

  this.mode = 'power saving mode';
};

  Thermostat.prototype.displayTemperature = function() {
    return this.temperature;
  };

  Thermostat.prototype.up = function() {
    if (this.temperature === this.maxTemperature) {
      throw 'Thermostat cannot go above ' + this.maxTemperature + ' degrees in ' + this.mode;
    } else {
      return (this.temperature += 1);
    }
  };

  Thermostat.prototype.down = function() {
    if (this.temperature === this.MIN_TEMP) {
      throw 'Thermostat cannot go below 10 degrees';
    } else {
      return (this.temperature -= 1);
    };
  };

  Thermostat.prototype.enablePowerSaving = function(){
    this.mode = 'power saving mode';
    this.maxTemperature = this.MAX_TEMP_POWER_SAVING;
  };

  Thermostat.prototype.disablePowerSaving = function(){
    this.mode = 'power hungry mode';
    this.maxTemperature = this.MAX_TEMP_POWER_HUNGRY;
  };

  Thermostat.prototype.reset = function(){
    this.temperature = this.DEFAULT_TEMP;
  };

  Thermostat.prototype.currentUsage = function(){
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
       return 'low-usage';
    } else if (this.temperature > this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature < this.MAX_TEMP_POWER_SAVING) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    };

  };
