class Venue < ActiveRecord::Base
	has_many :assets, as: :imageable
	accepts_nested_attributes_for :assets	
end
