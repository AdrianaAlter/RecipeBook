var SessionActions = require('../actions/session_actions.js');
var RecipeActions = require('../actions/recipe_actions.js');

ApiUtil = {
  fetchCurrentUser: function (completion) {
    $.ajax({
        type: "GET",
        url: "/api/session",
        dataType: "json",
        success: function (currentUser) {
          SessionActions.currentUserReceived(currentUser);
        },
        error: function () {
          console.log('Error fetching current user');
        },
        complete: function () {
          completion && completion();
        }
      });
  },

  logIn: function(userInfo, callback){
    $.ajax({
      type: "POST",
      url: "/api/session",
      dataType: "json",
      data: userInfo,
      success: function (currentUser) {
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
      },
      error: function () {
      }
    });
  },

  signUp: function (userInfo, callback) {
    $.ajax({
      type: "POST",
      url: "/api/users",
      dataType: "json",
      data: userInfo,
      success: function (currentUser) {
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
      },
      error: function () {
        console.log('Error in ApiUtil sign up');
      }
    });
  },

  logOut: function(){
    $.ajax({
      type: "DELETE",
      url: "/api/session",
      dataType: "json",
      success: function () {
          SessionActions.logOut();
      },
      error: function(){
        console.log('Error in ApiUtil logout');
      }
    });
  },
  fetchAllRecipes: function(){

    $.ajax({
      type: "GET",
      url: "/api/recipes",
      dataType: "json",
      success: function(recipes){
        RecipeActions.allRecipesReceived(recipes);
      },
      error: function(){
        console.log('Error in ApiUtil fetchAllRecipes');
      }
    });
  },
  fetchSingleRecipe: function(id){

    $.ajax({
      type: "GET",
      url: "/api/recipes/" + id,
      dataType: "json",
      success: function(recipe){
        RecipeActions.singleRecipeReceived(recipe);
      },
      error: function(){
        console.log('Error in ApiUtil fetchSingleRecipe');
      }
    })
  },
  createRecipe: function(name){

    $.ajax({
      type: "POST",
      url: "/api/recipes",
      dataType: "json",
      data: {name: name},
      success: function(recipes){
      RecipeActions.allRecipesReceived(recipes);
      },
      error: function(){
        console.log('Error in ApiUtil createRecipe');
      }
    });
  },
  
  editRecipe: function(id, recipe){

    $.ajax({
      type: "PATCH",
      url: "/api/recipes/" + id,
      data: {recipe: recipe},
      dataType: "json",
      success: function(recipe){
        RecipeActions.singleRecipeReceived(recipe);
      },
      error: function(){
        console.log('Error in ApiUtil editRecipe');
      }
    })
  },

  deleteRecipe: function(id){

    $.ajax({
      type: "DELETE",
      url: "/api/recipes/" + id,
      dataType: "json",
      success: function(recipes){
        window.location.href = "/";
        RecipeActions.allRecipesReceived(recipes);
      },
      error: function(){
        console.log('Error in ApiUtil deleteRecipe');
      }
    });
  },
  fetchAllIngredients: function(recipe_id){
    $.ajax({
      type: "GET",
      url: "/api/recipes/" + recipe_id + "/ingredients",
      dataType: "json",
      success: function(ingredients){
        RecipeActions.allIngredientsReceived(ingredients);
      },
      error: function(){
        console.log('Error in ApiUtil fetchAllIngredients');
      }
    });
  },
  fetchAllSteps: function(recipe_id){
    $.ajax({
      type: "GET",
      url: "/api/recipes/" + recipe_id + "/steps",
      dataType: "json",
      success: function(steps){
        RecipeActions.allStepsReceived(steps);
      },
      error: function(){
        console.log('Error in ApiUtil fetchAllSteps');
      }
    });
  },
  fetchAllNotes: function(recipe_id){
    $.ajax({
      type: "GET",
      url: "/api/recipes/" + recipe_id + "/notes",
      dataType: "json",
      success: function(notes){
        RecipeActions.allNotesReceived(notes);
      },
      error: function(){
        console.log('Error in ApiUtil fetchAllNotes');
      }
    });
  },
  // fetchSingleRecipe: function(id){
  //
  //   $.ajax({
  //     type: "GET",
  //     url: "/api/recipes/" + id,
  //     dataType: "json",
  //     success: function(recipe){
  //       RecipeActions.singleRecipeReceived(recipe);
  //     },
  //     error: function(){
  //       console.log('Error in ApiUtil fetchSingleRecipe');
  //     }
  //   })
  // },
  createIngredient: function(recipe_id, ingredient){
    $.ajax({
      type: "POST",
      url: "/api/recipes/" + recipe_id + "/ingredients",
      dataType: "json",
      data: {ingredient: ingredient},
      success: function(ingredient){
        RecipeActions.singleIngredientReceived(ingredient);
      },
      error: function(){
        console.log('Error in ApiUtil createIngredient');
      }
    });
  },
  createStep: function(recipe_id, step){
    $.ajax({
      type: "POST",
      url: "/api/recipes/" + recipe_id + "/steps",
      dataType: "json",
      data: {step: step},
      success: function(step){
        RecipeActions.singleStepReceived(step);
      },
      error: function(){
        console.log('Error in ApiUtil createStep');
      }
    });
  },
  createNote: function(recipe_id, note){
    $.ajax({
      type: "POST",
      url: "/api/recipes/" + recipe_id + "/notes",
      dataType: "json",
      data: {note: note},
      success: function(note){
        RecipeActions.singleNoteReceived(note);
      },
      error: function(){
        console.log('Error in ApiUtil createNote');
      }
    });
  },
  // editRecipe: function(id, recipe){
  //
  //   $.ajax({
  //     type: "PATCH",
  //     url: "/api/recipes/" + id,
  //     data: {recipe: recipe},
  //     dataType: "json",
  //     success: function(recipe){
  //       RecipeActions.singleRecipeReceived(recipe);
  //     },
  //     error: function(){
  //       console.log('Error in ApiUtil editRecipe');
  //     }
  //   })
  // },
  deleteIngredient: function (recipeID, id) {
     $.ajax({
       url: "/api/recipes/" + recipeID + "/ingredients/" + id,
       type: "DELETE",
       success: function(ingredients) {
         RecipeActions.allIngredientsReceived(ingredients);
              // RecipeActions.singleRecipeReceived(recipe);
       },
       error: function () {
         console.log("Error in ApiUtil deleteIngredient function");
       }
     });
   },
  deleteStep: function (recipeID, id) {
     $.ajax({
       url: "/api/recipes/" + recipeID + "/steps/" + id,
       type: "DELETE",
       success: function(steps) {
          RecipeActions.allStepsReceived(steps);
       },
       error: function () {
         console.log("Error in ApiUtil deleteStep function");
       }
     });
   },
  deleteNote: function (recipeID, id) {
     $.ajax({
       url: "/api/recipes/" + recipeID + "/notes/" + id,
       type: "DELETE",
       success: function(notes) {
          RecipeActions.allNotesReceived(notes);
       },
       error: function () {
         console.log("Error in ApiUtil deleteNote function");
       }
     });
   }


};

module.exports = ApiUtil;
