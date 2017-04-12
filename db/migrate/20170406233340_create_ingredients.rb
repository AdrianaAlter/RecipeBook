class CreateIngredients < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.string :item
      t.string :quantity
      t.integer :recipe_id
      t.timestamps
    end
  end
end
