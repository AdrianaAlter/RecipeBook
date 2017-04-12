var React = require('react');
var ApiUtil = require('../util/api_util.js');
var RecipeStore = require('../stores/recipe_store.js');
var StepIndexItem = require('./step_index_item.jsx');

var StepIndex = React.createClass({

  getInitialState: function(){
    return { steps: RecipeStore.getStepsByRecipe(this.props.recipeID) };
  },

  componentDidMount: function(){
    this.listener = RecipeStore.addListener(this._onChange);
    ApiUtil.fetchAllSteps(this.props.recipeID);
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },

  _onChange: function(){
    this.setState({ steps: RecipeStore.getStepsByRecipe(this.props.recipeID) });
  },

  render: function(){
    var stepItems;
    if (!this.state.steps || this.state.steps.length === 0){
      // stepItems = <li>No steps yet!</li>
    }
    else {
      var self = this;
      stepItems = this.state.steps.map(function(step){
        var i = self.state.steps.indexOf(step);
        return <StepIndexItem key={step.id} step={step} num={i + 1} />
      });
    }

    return <ul><h2>Steps:</h2>{stepItems}</ul>

  }




});

module.exports = StepIndex;
