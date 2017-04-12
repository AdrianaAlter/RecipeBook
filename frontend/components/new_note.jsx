var React = require('react');
var ApiUtil = require('../util/api_util.js');

var NewNote = React.createClass({

  getInitialState: function(){
    return { content: "" };
  },

  updateContent: function(e){
    this.setState({content: e.currentTarget.value});
  },

  submit: function(){
    var note = {};
    note.content = this.state.content;
    ApiUtil.createNote(this.props.recipeID, note);
  },

  render: function(){

    return <form className="note-form">
            <h2>Add a Note</h2>
            <textarea onChange={this.updateContent}></textarea>
            <button onClick={this.submit}>Done!</button>
          </form>

  }




});

module.exports = NewNote;
