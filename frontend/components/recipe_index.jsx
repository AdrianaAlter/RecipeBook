var React = require('react');
var RecipeStore = require('../stores/recipe_store.js');
var ApiUtil = require('../util/api_util.js');
var NewRecipe = require('./new_recipe.jsx');
var RecipeIndexItem = require('./recipe_index_item.jsx');

var RecipeIndex = React.createClass({
  getInitialState: function(){
    return { recipes: RecipeStore.all() };
  },

  componentDidMount: function(){
    this.listener = RecipeStore.addListener(this._onChange);
    ApiUtil.fetchAllRecipes();
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },

  _onChange: function(){
    this.setState({ recipes: RecipeStore.all() });
  },

  render: function(){
    var self = this;
    var recipeItems;

    if (!self.state.recipes || self.state.recipes.length == 0){
      // recipeItems = <h2>No recipes yet!</h2>
    }
    else {
      recipeItems = self.state.recipes.map(function(recipe){
        return <RecipeIndexItem key={recipe.id} recipe={recipe} />
      });
    }

    return(
      <div id="recipes" className="main-div">
        <section className="border"></section>
        <div className="wrapper">
          <ul id="recipe-index" className="list">
            <h2>Recipes:</h2>
            {recipeItems}
          </ul>
          <NewRecipe />
        </div>
      </div>
    )
  }

});

module.exports = RecipeIndex;
