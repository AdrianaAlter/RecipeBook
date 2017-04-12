var React = require('react');
var ApiUtil = require('../util/api_util.js');

var NewIngredient = React.createClass({

  getInitialState: function(){
    return { item: "", quantity: "" };
  },

  updateItem: function(e){
    this.setState({item: e.currentTarget.value});
  },
  updateQuantity: function(e){
    this.setState({quantity: e.currentTarget.value});
  },

  submit: function(){
    var ingredient = {};
    ingredient.item = this.state.item;
    ingredient.quantity = this.state.quantity;
    ApiUtil.createIngredient(this.props.recipeID, ingredient);
  },

  render: function(){

    return <form className="ingredient-form">
            <h2>Add an Ingredient</h2>
            <textarea onChange={this.updateItem} placeholder="Item"></textarea>
            <textarea onChange={this.updateQuantity} placeholder="Quantity"></textarea>
            <button onClick={this.submit}>Done!</button>
          </form>
  }




});

module.exports = NewIngredient;
