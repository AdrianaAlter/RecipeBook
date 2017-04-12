class AddTabToRecipes < ActiveRecord::Migration
  def change
    add_column :recipes, :tab, :string
  end
end
