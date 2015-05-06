class Asset < ActiveRecord::Base
	mount_uploader :asset, AssetUploader
	belongs_to :imageable, polymorphic: true
	belongs_to :asset_type
end
