class Api::StepsController < ApplicationController

  def index
    @steps = Step.where(recipe_id: current_recipe_id)
    render :index
  end

  def show
    @step = Step.find(params[:id])
    render :show
  end

  def create
    @step = Step.new(step_params)
    @step.recipe_id = current_recipe_id;
    if @step.save
      render :show
    end
  end

  def update
    @step = Step.find(params[:id])
    @step.update(step_params)
    render :show
  end

  def destroy
    @step = Step.find(params[:id])
    @step.destroy
    @steps = Step.where(recipe_id: current_recipe_id)
    render :index
  end
  private

  def step_params
    params.require(:step).permit(:text)
  end
  def current_recipe_id
		params[:recipe_id]
	end
  def current_recipe
    Recipe.where(id: current_recipe_id)
  end

end
