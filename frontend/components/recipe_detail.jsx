var React = require('react');
var RecipeStore = require('../stores/recipe_store.js');
var ApiUtil = require('../util/api_util.js');
var NewIngredient = require('./new_ingredient.jsx');
var NewStep = require('./new_step.jsx');
var NewNote = require('./new_note.jsx');
var IngredientIndex = require('./ingredient_index.jsx');
var StepIndex = require('./step_index.jsx');
var NoteIndex = require('./note_index.jsx');

var RecipeDetail = React.createClass({
  contextTypes: {
		router: React.PropTypes.object.isRequired
	},
  getInitialState: function(){
    return { recipe: this.getStateFromStore() }
  },
  getStateFromStore: function(){
    return RecipeStore.find(this.props.params.recipe_id);
  },
  componentDidMount: function(){
    this.listener = RecipeStore.addListener(this._onChange);
    ApiUtil.fetchSingleRecipe(this.props.params.recipe_id);
  },
  componentWillUnmount: function(){
    this.listener.remove();
  },
  _onChange: function(){
    this.setState({ recipe: this.getStateFromStore() });
  },
  delete: function(){
    ApiUtil.deleteRecipe(this.props.params.recipe_id);
  },
  select: function(e){
    var selected = e.currentTarget.innerHTML.toLowerCase();
    var recipe = {};
    recipe.tab = selected;
    ApiUtil.editRecipe(this.props.params.recipe_id, recipe);
    this.setState({ shown: selected })
  },

  render: function(){
    if (!this.state.recipe){
      return <div></div>
    }
    var list;
    var form;

    if (!this.state.shown){
      var tab = this.state.recipe.tab;
      this.setState({ "shown": tab });
    }
    else if (this.state.shown === "ingredients"){
      list = <IngredientIndex recipeID={this.state.recipe.id} />
      form = <NewIngredient recipeID={this.state.recipe.id} />
    }
    else if (this.state.shown === "steps"){
      list = <StepIndex recipeID={this.state.recipe.id} />
      form = <NewStep recipeID={this.state.recipe.id} />
    }
    else if (this.state.shown === "notes"){
      list = <NoteIndex recipeID={this.state.recipe.id} />
      form = <NewNote recipeID={this.state.recipe.id} />
    }
    var self = this;
    var tabList = ["Ingredients", "Steps", "Notes"];
    var tabs = tabList.map(function(tabName){
      var className = tabName.toLowerCase() === self.state.shown ? "selected" : "";
      return <article key={tabList.indexOf(tabName)}><button onClick={self.select} className={className}>{tabName}</button></article>
    });
    return (
      <div className="main-div detail">
        <section className="tabs">
          <button>{this.state.recipe.name}</button>
          <button onClick={this.delete}>Delete</button>
          <section>
            {tabs}
          </section>
        </section>
        <div className="wrapper">
          <section className="list">{list}</section>
          <sidebar className="recipe-form">
            {form}
          </sidebar>
        </div>
      </div>
    )
  }

});

module.exports = RecipeDetail;
