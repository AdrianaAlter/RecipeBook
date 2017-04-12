class Api::PicturesController < ApplicationController

  def index
    @pictures = Picture.where(recipe_id: current_recipe_id)
    render :index
  end

  def show
    @picture = Picture.find(params[:id])
    render :show
  end

  def create
    @picture = Picture.new(picture_params)
    @picture.recipe_id = current_recipe_id;
    if @picture.save
      render :show
    end
  end

  def update
    @picture = Picture.find(params[:id])
    @picture.update(picture_params)
    render :show
  end

  def destroy
    @picture = Picture.find(params[:id])
    @picture.destroy
    @pictures = Picture.where(recipe_id: current_recipe_id)
    render :index
  end
  private

  def picture_params
    params.require(:picture).permit(:caption, :image)
  end
  def current_recipe_id
		params[:recipe_id]
	end
  def current_recipe
    Recipe.where(id: current_recipe_id)
  end

end
