var React = require('react');
var LogIn = require('./log_in.jsx');
var SignUp = require('./sign_up.jsx');

var Welcome = React.createClass({

  render: function(){
    return <div id="welcome" className="main-div">
            <section className="border"></section>
            <h1>Recipe Book</h1>
            <div>
              <LogIn />
              <SignUp />
            </div>
          </div>
  }

});

module.exports = Welcome;
