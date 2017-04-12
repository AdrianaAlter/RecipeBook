class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.text :caption
      t.attachment :image
      t.integer :recipe_id
      t.timestamps
    end
  end
end
