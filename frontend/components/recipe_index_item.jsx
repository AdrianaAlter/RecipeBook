var React = require('react');
var Link = require('react-router').Link;

var RecipeIndexItem = React.createClass({

  render: function(){
    return(
      <Link to={"/recipes/" + this.props.recipe.id} className="recipe-item">
        <li>
          <h3>{this.props.recipe.name}</h3>
        </li>
      </Link>
    )
  }

});

module.exports = RecipeIndexItem;
