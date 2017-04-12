var React = require('react');
var ApiUtil = require('../util/api_util.js');

var IngredientIndexItem = React.createClass({
  delete: function(){
    this.props.delete(this.props.ingredient.id)
  },

  render: function(){
    return(
      <li className="ingredient">
        <h3>{this.props.ingredient.item}</h3>
        <h3>{this.props.ingredient.quantity}</h3>
        <button onClick={this.delete}>x</button>
      </li>
    )
  }

});

module.exports = IngredientIndexItem;
