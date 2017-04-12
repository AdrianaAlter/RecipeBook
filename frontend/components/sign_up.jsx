var React = require('react');
var ApiUtil = require('../util/api_util.js');

var SignUp = React.createClass({
  contextTypes: { router: React.PropTypes.object.isRequired },

  getInitialState: function(){
    return { user_name: "", password: "", display: "button" };
  },
  updateName: function(e){
    this.setState({user_name: e.currentTarget.value});
  },
  updatePassword: function(e){
    this.setState({password: e.currentTarget.value});
  },
  toggle: function(){
    this.state.display == "button" ? this.setState({display: "form"}) : this.setState({display: "button"});
  },
  submitInfo: function (e) {
   e.preventDefault();
   var router = this.context.router;
   ApiUtil.signUp(this.state, function () {
     router.push("/");
   });
  },
  render: function(){

    var button =  <button className="welcome-button" onClick={this.toggle}>Sign Up</button>;
    var form =   (
                  <form className="welcome-form">
                      <h1>Sign Up</h1>
                      <fieldset>
                        <input type="text" placeholder="User Name" onChange={this.updateName}></input>
                        <input type="password" placeholder="Password" onChange={this.updatePassword}></input>
                      </fieldset>
                      <section className="form-buttons">
                        <button onClick={this.submitInfo}>Submit</button>
                        <button onClick={this.toggle}>Cancel</button>
                      </section>
                   </form>
    );
    var component = this.state.display === "button" ? button : form;

    return(
      <section className="welcome-section">{component}</section>
    )
  }

});

module.exports = SignUp;
