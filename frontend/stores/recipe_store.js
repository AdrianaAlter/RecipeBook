var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var RecipeConstants = require('../constants/recipe_constants.js');

var RecipeStore = new Store(Dispatcher);
var _recipes = [];

RecipeStore.all = function(){
  return _recipes;
};

RecipeStore.find = function(id){
  for (var i = 0; i < _recipes.length; i++){
    if (_recipes[i].id == id){
      return _recipes[i];
    }
  }
};

RecipeStore.resetRecipes = function(recipes){
  _recipes = recipes;
};

RecipeStore.resetRecipe = function(recipe){
  if (_recipes.includes(recipe)){
    for (var i = 0; i < _recipes.length; i++){
      if (_recipes[i].id == recipe.id){
        _recipes[i] = recipe;
      }
    }
  }
  else {
    _recipes.push(recipe);
  }
};

RecipeStore.find = function(id) {
  for (var i = 0; i < _recipes.length; i++) {
    if (_recipes[i].id == id) { return _recipes[i]; }
  }
};

RecipeStore.resetAllIngredients = function(ingredients) {
    if (ingredients.length > 0){
      var recipe = RecipeStore.find(ingredients[0].recipe_id);
      recipe.ingredients = ingredients;
      RecipeStore.resetRecipe(recipe);
    }
    else {
      
    }
};

RecipeStore.resetSingleIngredient = function(ingredient) {

  var recipe = RecipeStore.find(ingredient.recipe_id);
  var oldIngredient = RecipeStore.findIngredientInRecipe(ingredient, recipe);
  if (oldIngredient) {
    recipe.ingredients[recipe.ingredients.indexOf(oldIngredient)] = ingredient;
  }
  else {
    recipe.ingredients.push(ingredient);
  }
  RecipeStore.resetRecipe(recipe);
};

RecipeStore.getIngredientsByRecipe = function(id){
  var recipe = RecipeStore.find(id);
  return recipe.ingredients;
};

RecipeStore.findIngredientInRecipe = function (ingredient, recipe) {
    for (var i = 0; i < recipe.ingredients.length; i++) {
      if (recipe.ingredients[i].id === ingredient.id) { return recipe.ingredients[i]; }
    }
};

RecipeStore.resetAllSteps = function(steps) {
    if (steps.length > 0){
      var recipe = RecipeStore.find(steps[0].recipe_id);
      recipe.steps = steps;
      RecipeStore.resetRecipe(recipe);
    }
};

RecipeStore.resetSingleStep = function(step) {

  var recipe = RecipeStore.find(step.recipe_id);
  var oldStep = RecipeStore.findStepInRecipe(step, recipe);
  if (oldStep) {
    recipe.steps[recipe.steps.indexOf(oldStep)] = step;
  }
  else {
    recipe.steps.push(step);
  }
  RecipeStore.resetRecipe(recipe);
};

RecipeStore.getStepsByRecipe = function(id){
  var recipe = RecipeStore.find(id);
  return recipe.steps;
};

RecipeStore.findStepInRecipe = function (step, recipe) {
    for (var i = 0; i < recipe.steps.length; i++) {
      if (recipe.steps[i].id === step.id) { return recipe.steps[i]; }
    }
};

RecipeStore.resetAllNotes = function(notes) {
    if (notes.length > 0){
      var recipe = RecipeStore.find(notes[0].recipe_id);
      recipe.notes = notes;
      RecipeStore.resetRecipe(recipe);
    }
};

RecipeStore.resetSingleNote = function(note) {

  var recipe = RecipeStore.find(note.recipe_id);
  var oldNote = RecipeStore.findNoteInRecipe(note, recipe);
  if (oldNote) {
    recipe.notes[recipe.notes.indexOf(oldNote)] = note;
  }
  else {
    recipe.notes.push(note);
  }
  RecipeStore.resetRecipe(recipe);
};

RecipeStore.getNotesByRecipe = function(id){
  var recipe = RecipeStore.find(id);
  return recipe.notes;
};

RecipeStore.findNoteInRecipe = function (note, recipe) {
    for (var i = 0; i < recipe.notes.length; i++) {
      if (recipe.notes[i].id === note.id) { return recipe.notes[i]; }
    }
};

RecipeStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case RecipeConstants.ALL_RECIPES_RECEIVED:
      RecipeStore.resetRecipes(payload.recipes);
      RecipeStore.__emitChange();
      break;
    case RecipeConstants.SINGLE_RECIPE_RECEIVED:
      RecipeStore.resetRecipe(payload.recipe);
      RecipeStore.__emitChange();
      break;
    case RecipeConstants.ALL_INGREDIENTS_RECEIVED:
      RecipeStore.resetAllIngredients(payload.ingredients);
      RecipeStore.__emitChange();
      break;
    case RecipeConstants.SINGLE_INGREDIENT_RECEIVED:
      RecipeStore.resetSingleIngredient(payload.ingredient);
      RecipeStore.__emitChange();
      break;
    case RecipeConstants.ALL_STEPS_RECEIVED:
      RecipeStore.resetAllSteps(payload.steps);
      RecipeStore.__emitChange();
      break;
    case RecipeConstants.SINGLE_STEP_RECEIVED:
      RecipeStore.resetSingleStep(payload.step);
      RecipeStore.__emitChange();
      break;
    case RecipeConstants.ALL_NOTES_RECEIVED:
      RecipeStore.resetAllNotes(payload.notes);
      RecipeStore.__emitChange();
      break;
    case RecipeConstants.SINGLE_NOTE_RECEIVED:
      RecipeStore.resetSingleNote(payload.note);
      RecipeStore.__emitChange();
      break;
    }
};

module.exports = RecipeStore;
