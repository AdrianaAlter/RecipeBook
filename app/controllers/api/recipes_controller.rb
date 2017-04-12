class Api::RecipesController < ApplicationController

  def index
    @recipes = current_user.recipes
    render :index
  end

  def show
    @recipe = Recipe.find(params[:id])
    render :show
  end

  def create
    @recipe = Recipe.new(name: params[:name], user_id: current_user.id, tab: "ingredients")
    if @recipe.save
      render :index
    end
  end

  def update
    @recipe = Recipe.find(params[:id])
    @recipe.update(recipe_params)
    render :show
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
    @recipes = current_user.recipes
    render :index
  end
  private

  def recipe_params
    params.require(:recipe).permit(:name, :user_id, :tab)
  end
end
