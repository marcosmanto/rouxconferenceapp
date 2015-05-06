json.array!(@venues) do |venue|
  json.extract! venue, :id, :name, :description, :location
  json.url venue_url(venue, format: :json)
end
