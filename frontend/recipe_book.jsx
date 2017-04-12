var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var BrowserHistory = require('react-router').browserHistory;
var HashHistory = require('react-router').HashHistory;
var App = require('./components/app.jsx');
var RecipeIndex = require('./components/recipe_index.jsx');
var RecipeDetail = require('./components/recipe_detail.jsx');
var Welcome = require('./components/welcome.jsx');
var SessionStore = require('./stores/session_store.js');
var ApiUtil = require('./util/api_util.js');


var routes = (
  <Router history={BrowserHistory}>
    <Route path="/" component={App} onEnter={_mustLogIn}>
      <IndexRoute component={RecipeIndex} />
      <Route path="recipes/:recipe_id" component={RecipeDetail} />
    </Route>
    <Route path="/login" component={Welcome} />
  </Router>
)

document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById("root");
  var header = <h1>HEADER</h1>
  ReactDOM.render(routes, root);
});

function _mustLogIn(nextState, replace, asyncCompletionCallback) {
  if (!SessionStore.currentUserFetched()) {
    ApiUtil.fetchCurrentUser(_redirectToLogIn);
  }
  else {
    _redirectToLogIn();
  }

  function _redirectToLogIn() {
    if (!SessionStore.isLoggedIn()) {
      replace("/login");
    }
    asyncCompletionCallback();
  }
};
