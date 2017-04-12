class Api::NotesController < ApplicationController

  def index
    @notes = Note.where(recipe_id: current_recipe_id)
    render :index
  end

  def show
    @note = Note.find(params[:id])
    render :show
  end

  def create
    @note = Note.new(note_params)
    @note.recipe_id = current_recipe_id;
    if @note.save
      render :show
    end
  end

  def update
    @note = Note.find(params[:id])
    @note.update(note_params)
    render :show
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    @notes = Note.where(recipe_id: current_recipe_id)
    render :index
  end
  private

  def note_params
    params.require(:note).permit(:content)
  end
  def current_recipe_id
		params[:recipe_id]
	end
  def current_recipe
    Recipe.where(id: current_recipe_id)
  end

end
