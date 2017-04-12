var React = require('react');
var ApiUtil = require('../util/api_util.js');

var NewRecipe = React.createClass({

  getInitialState: function(){
    return { name: "" };
  },

  updateName: function(e){
    this.setState({name: e.currentTarget.value});
  },

  submit: function(){
    ApiUtil.createRecipe(this.state.name);
  },

  render: function(){

    return <form className="recipe-form">
            <h2>New Recipe</h2>
            <textarea onChange={this.updateName} placeholder="Name"></textarea>
            <button onClick={this.submit}>Done!</button>
          </form>

  }




});

module.exports = NewRecipe;
