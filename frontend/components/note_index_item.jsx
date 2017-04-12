var React = require('react');
var ApiUtil = require('../util/api_util.js');

var NoteIndexItem = React.createClass({
  delete: function(){
    ApiUtil.deleteNote(this.props.note.recipe_id, this.props.note.id);
  },

  render: function(){
    return(
      <li className="note">
        <h3>{this.props.note.content}</h3>
        <button onClick={this.delete}>x</button>
      </li>
    )
  }

});

module.exports = NoteIndexItem;
