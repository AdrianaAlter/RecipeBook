var React = require('react');
var ApiUtil = require('../util/api_util.js');
var RecipeStore = require('../stores/recipe_store.js');
var IngredientIndexItem = require('./ingredient_index_item.jsx');

var IngredientIndex = React.createClass({

  getInitialState: function(){
    return { ingredients: RecipeStore.getIngredientsByRecipe(this.props.recipeID) };
  },

  componentDidMount: function(){
    this.listener = RecipeStore.addListener(this._onChange);
    ApiUtil.fetchAllIngredients(this.props.recipeID);
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },

  _onChange: function(){
    this.setState({ ingredients: RecipeStore.getIngredientsByRecipe(this.props.recipeID) });
  },

  delete: function(ingredientID){
    ApiUtil.deleteIngredient(this.props.recipeID, ingredientID);
  },

  render: function(){
    var ingredientItems;
    if (!this.state.ingredients || this.state.ingredients.length === 0){
      // ingredientItems = <li>No ingredients yet!</li>
    }
    else {
      var self = this;
      ingredientItems = this.state.ingredients.map(function(ingredient){
        return <IngredientIndexItem key={ingredient.id} ingredient={ingredient} delete={self.delete} />
      });
    }

    return <ul><h2>Ingredients:</h2>{ingredientItems}</ul>

  }




});

module.exports = IngredientIndex;
