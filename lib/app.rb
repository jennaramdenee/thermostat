ENV['RACK_ENV'] ||= 'development'

require 'sinatra/base'
require_relative 'data_mapper_setup'
require 'json'

class Thermostat < Sinatra::Base

  get '/' do
    'Hello Thermostat!'
  end

  get '/settings' do
    headers 'Access-Control-Allow-Origin' => '*'
    { city: User.get(1).city,
      temperature: User.get(1).temperature,
      mode: User.get(1).mode
    }.to_json
  end

  post '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    user = User.get(1)
    user.update(temperature: params[:temperature])
  end

  post '/city' do
    headers 'Access-Control-Allow-Origin' => '*'
    user = User.get(1)
    user.update(city: params[:city])
  end



  # start the server if ruby file executed directly
  run! if app_file == $0
end
