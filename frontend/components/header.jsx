var React = require('react');
var LogOut = require('./log_out.jsx');

var Header = React.createClass({

  goTo: function(){
    window.location.href = "/";
  },

  render: function(){
    return <header>
            <LogOut />
            <button><h1>Recipe Book</h1></button>
            <button onClick={this.goTo}>Recipes</button>
          </header>
  }

});

module.exports = Header;
