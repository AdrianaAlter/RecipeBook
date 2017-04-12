class Api::IngredientsController < ApplicationController

  def index
    @ingredients = Ingredient.where(recipe_id: current_recipe_id)
    render :index
  end

  def show
    @ingredient = Ingredient.find(params[:id])
    render :show
  end

  def create
    @ingredient = Ingredient.new(ingredient_params)
    @ingredient.recipe_id = current_recipe_id;
    if @ingredient.save
      render :show
    end
  end

  def update
    @ingredient = Ingredient.find(params[:id])
    @ingredient.update(ingredient_params)
    render :show
  end

  def destroy
    @ingredient = Ingredient.find(params[:id])
    @ingredient.destroy
    # @recipe = Recipe.find(current_recipe_id)
    # render "api/recipes/show"
    @ingredients = Ingredient.where(recipe_id: current_recipe_id)
    render :index
  end
  private

  def ingredient_params
    params.require(:ingredient).permit(:item, :quantity)
  end
  def current_recipe_id
		params[:recipe_id]
	end
  def current_recipe
    Recipe.where(id: current_recipe_id)
  end

end
