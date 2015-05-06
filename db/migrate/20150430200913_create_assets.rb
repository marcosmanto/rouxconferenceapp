class CreateAssets < ActiveRecord::Migration
  def change
    create_table :assets do |t|
    	t.string :asset
			t.references :imageable, polymorphic: true, index: true
      t.timestamps null: false
    end
  end
end
