var React = require('react');
var ApiUtil = require('../util/api_util.js');
var RecipeStore = require('../stores/recipe_store.js');
var NoteIndexItem = require('./note_index_item.jsx');

var NoteIndex = React.createClass({

  getInitialState: function(){
    return { notes: RecipeStore.getNotesByRecipe(this.props.recipeID) };
  },

  componentDidMount: function(){
    this.listener = RecipeStore.addListener(this._onChange);
    ApiUtil.fetchAllNotes(this.props.recipeID);
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },

  _onChange: function(){
    this.setState({ notes: RecipeStore.getNotesByRecipe(this.props.recipeID) });
  },

  render: function(){
    var noteItems;
    if (!this.state.notes || this.state.notes.length === 0){
      // noteItems = <li>No notes yet!</li>
    }
    else {
      noteItems = this.state.notes.map(function(note){
        return <NoteIndexItem key={note.id} note={note} />
      });
    }

    return <ul><h2>Notes:</h2>{noteItems}</ul>

  }




});

module.exports = NoteIndex;
