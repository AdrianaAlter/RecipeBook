var React = require('react');
var ApiUtil = require('../util/api_util.js');

var NewStep = React.createClass({

  getInitialState: function(){
    return { text: "" };
  },

  updateText: function(e){
    this.setState({text: e.currentTarget.value});
  },

  submit: function(){
    var step = {};
    step.text = this.state.text;
    ApiUtil.createStep(this.props.recipeID, step);
  },

  render: function(){

    return <form className="step-form">
            <h2>Add a Step</h2>
            <textarea onChange={this.updateText}></textarea>
            <button onClick={this.submit}>Done!</button>
          </form>

  }




});

module.exports = NewStep;
