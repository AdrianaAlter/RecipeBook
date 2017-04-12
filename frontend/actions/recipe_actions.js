var RecipeConstants = require('../constants/recipe_constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var RecipeActions = {

  allRecipesReceived: function(recipes){
    Dispatcher.dispatch({
      actionType: RecipeConstants.ALL_RECIPES_RECEIVED,
      recipes: recipes
    });
  },

  singleRecipeReceived: function(recipe){
    Dispatcher.dispatch({
      actionType: RecipeConstants.SINGLE_RECIPE_RECEIVED,
      recipe: recipe
    });
  },

  allIngredientsReceived: function(ingredients){
    Dispatcher.dispatch({
      actionType: RecipeConstants.ALL_INGREDIENTS_RECEIVED,
      ingredients: ingredients
    });
  },

  singleIngredientReceived: function(ingredient){
    Dispatcher.dispatch({
      actionType: RecipeConstants.SINGLE_INGREDIENT_RECEIVED,
      ingredient: ingredient
    });
  },

  allStepsReceived: function(steps){
    Dispatcher.dispatch({
      actionType: RecipeConstants.ALL_STEPS_RECEIVED,
      steps: steps
    });
  },

  singleStepReceived: function(step){
    Dispatcher.dispatch({
      actionType: RecipeConstants.SINGLE_STEP_RECEIVED,
      step: step
    });
  },

  allNotesReceived: function(notes){
    Dispatcher.dispatch({
      actionType: RecipeConstants.ALL_NOTES_RECEIVED,
      notes: notes
    });
  },

  singleNoteReceived: function(note){
    Dispatcher.dispatch({
      actionType: RecipeConstants.SINGLE_NOTE_RECEIVED,
      note: note
    });
  }

};

module.exports = RecipeActions;
