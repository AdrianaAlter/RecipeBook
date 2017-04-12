var React = require('react');
var ApiUtil = require('../util/api_util.js');

var LogOut = React.createClass({

  contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  logOut: function(){
    ApiUtil.logOut();
    this.context.router.push("/login");
  },

  render: function(){
    return <button onClick={this.logOut}>Log Out</button>
  }

});

module.exports = LogOut;
