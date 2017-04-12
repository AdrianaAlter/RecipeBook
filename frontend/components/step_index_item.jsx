var React = require('react');
var ApiUtil = require('../util/api_util.js');

var StepIndexItem = React.createClass({
  delete: function(){
    ApiUtil.deleteStep(this.props.step.recipe_id, this.props.step.id);
  },

  render: function(){
    return(
      <li className="step">
        <h3>{this.props.num}</h3>
        <h3>{this.props.step.text}</h3>
        <button onClick={this.delete}>x</button>
      </li>
    )
  }

});

module.exports = StepIndexItem;
