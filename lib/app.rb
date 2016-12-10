ENV['RACK_ENV'] ||= 'development'

require 'sinatra/base'
require_relative 'data_mapper_setup'
require 'json'

class Thermostat < Sinatra::Base
  
  get '/' do
    'Hello Thermostat!'
  end

  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    { city: User.get(1).city,
      temperature: User.get(1).temperature,
      mode: User.get(1).mode
    }.to_json
  end



  # start the server if ruby file executed directly
  run! if app_file == $0
end
