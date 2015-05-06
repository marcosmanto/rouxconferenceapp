class AddAssetTypeRefToAssets < ActiveRecord::Migration
  def change
    add_reference :assets, :asset_type, index: true
    add_foreign_key :assets, :asset_types
  end
end
