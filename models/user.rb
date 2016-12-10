class User

  include DataMapper::Resource

  property :id, Serial
  property :city, String
  property :temperature, String
  property :mode, String

end
